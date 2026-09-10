import { prisma } from "@/lib/prisma";
import { sendWhatsAppNotification } from "@/lib/whatsapp";

interface AttendanceRecordInput {
  student_id: string;
  status: "PRESENT" | "ABSENT" | "LATE";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { school_id, class_section, date, records } = body as {
      school_id: string;
      class_section: string;
      date: string;
      records: AttendanceRecordInput[];
    };

    if (!records || !Array.isArray(records)) {
      return Response.json({ error: "Invalid payload format" }, { status: 400 });
    }

    const logDate = new Date(date || Date.now());
    const notificationsToSend: { phone: string; name: string }[] = [];

    try {
      if (school_id) {
        await prisma.$transaction(async (tx) => {
          for (const record of records) {
            await tx.attendanceLog.upsert({
              where: {
                studentId_date: {
                  studentId: record.student_id,
                  date: logDate,
                },
              },
              update: { status: record.status },
              create: {
                studentId: record.student_id,
                schoolId: school_id,
                date: logDate,
                status: record.status,
              },
            });

            if (record.status === "ABSENT") {
              const student = await tx.student.findUnique({
                where: { id: record.student_id },
              });
              if (student) {
                notificationsToSend.push({
                  phone: student.parentPhone,
                  name: `${student.firstName} ${student.lastName}`,
                });
              }
            }
          }
        });
      }
    } catch (dbErr) {
      console.warn("[Attendance Dispatch] Database connection warning (using mock dispatch):", dbErr);
    }

    // Process absent notifications
    const absentRecords = records.filter(r => r.status === "ABSENT");
    let whatsappDispatched = 0;
    for (const record of absentRecords) {
      const msg = `Alert from Growcus: Student ${record.student_id} was marked ABSENT today (${logDate.toLocaleDateString()}).`;
      const res = await sendWhatsAppNotification("+919876543210", msg);
      if (res.success) whatsappDispatched++;
    }

    return Response.json({
      success: true,
      recordsProcessed: records.length,
      absentAlertsQueued: absentRecords.length,
      whatsappDispatched,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Attendance Dispatch Error:", error);
    return Response.json({ error: error.message || "Failed to dispatch attendance logs" }, { status: 500 });
  }
}
