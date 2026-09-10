import { createAndSendOTP } from "@/features/auth/services/otp.service";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone, role } = body;

    if (!phone) {
      return Response.json({ error: "Phone number is required" }, { status: 400 });
    }

    let userId = "demo-user-id";
    try {
      let user = await prisma.user.findFirst({ where: { phone } });
      if (!user) {
        let school = await prisma.school.findFirst();
        if (!school) {
          school = await prisma.school.create({
            data: {
              name: "Growcus Model Academy",
              licenseKey: "GROWCUS-DEMO-2026",
              boardType: "CBSE",
            },
          });
        }

        user = await prisma.user.create({
          data: {
            phone,
            role: role || "PARENT",
            schoolId: school.id,
            name: `User ${phone.slice(-4)}`,
          },
        });
      }
      userId = user.id;
    } catch (dbErr) {
      console.warn("[OTP Send Route] Database connection warning (using mock dev user):", dbErr);
    }

    const result = await createAndSendOTP(phone, userId);
    return Response.json({ success: true, devOtp: result?.devOtp });
  } catch (error) {
    console.error("Send OTP error:", error);
    return Response.json({ error: "Failed to dispatch OTP" }, { status: 500 });
  }
}
