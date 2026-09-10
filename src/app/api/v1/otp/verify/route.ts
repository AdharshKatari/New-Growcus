import { verifyOTP } from "@/features/auth/services/otp.service";

export async function POST(req: Request) {
  try {
    const { phone, otp } = await req.json();

    if (!phone || !otp) {
      return Response.json({ error: "Phone and OTP code are required" }, { status: 400 });
    }

    const isValid = await verifyOTP(phone, otp);
    if (!isValid) {
      return Response.json({ error: "Invalid or expired OTP code" }, { status: 401 });
    }

    return Response.json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    console.error("Verify OTP error:", error);
    return Response.json({ error: "Failed to verify OTP" }, { status: 500 });
  }
}
