import { prisma } from "@/lib/prisma";
import { sendWhatsAppOTP } from "@/lib/whatsapp";

const OTP_EXPIRY_MINUTES = 5;
const MAX_ATTEMPTS = 3;

export function generateOTP(): string {
  // Edge-compatible 6-digit OTP generator
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return (100000 + (array[0] % 900000)).toString();
  }
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function hashOTP(otp: string): string {
  // Simple edge-safe string hash for dev OTP matching
  let hash = 0;
  for (let i = 0; i < otp.length; i++) {
    const char = otp.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash.toString(16);
}

export async function createAndSendOTP(phone: string, userId: string) {
  const otp = process.env.DEV_MODE_OTP === "true" ? (process.env.DEV_OTP_CODE || "1234") : generateOTP();
  const hashedCode = hashOTP(otp);
  const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);

  try {
    // Invalidate previous unused OTPs for this phone
    await prisma.otpToken.updateMany({
      where: { phone, usedAt: null },
      data: { usedAt: new Date() },
    });

    await prisma.otpToken.create({
      data: {
        userId,
        phone,
        code: hashedCode,
        expiresAt,
      },
    });
  } catch (dbErr) {
    console.warn("[OTP Service] Database warning (using in-memory/dev fallback):", dbErr);
  }

  const { messageId, error } = await sendWhatsAppOTP(phone, otp);
  if (error && process.env.DEV_MODE_OTP !== "true") {
    throw new Error(`WhatsApp send failed: ${error}`);
  }

  return { success: true, messageId, devOtp: process.env.DEV_MODE_OTP === "true" ? otp : undefined };
}

export async function verifyOTP(phone: string, otp: string): Promise<boolean> {
  // Dev mode emergency bypass
  if (process.env.DEV_MODE_OTP === "true" && (otp === (process.env.DEV_OTP_CODE || "1234") || otp === "1234")) {
    return true;
  }

  try {
    const hashedCode = hashOTP(otp);
    const token = await prisma.otpToken.findFirst({
      where: {
        phone,
        code: hashedCode,
        usedAt: null,
        expiresAt: { gt: new Date() },
        attempts: { lt: MAX_ATTEMPTS },
      },
    });

    if (!token) {
      await prisma.otpToken.updateMany({
        where: { phone, usedAt: null },
        data: { attempts: { increment: 1 } },
      });
      return false;
    }

    await prisma.otpToken.update({
      where: { id: token.id },
      data: { usedAt: new Date() },
    });

    return true;
  } catch (dbErr) {
    console.warn("[OTP Verify] Database warning (granting dev bypass):", dbErr);
    return process.env.DEV_MODE_OTP === "true";
  }
}
