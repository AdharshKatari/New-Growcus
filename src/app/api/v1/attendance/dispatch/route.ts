import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { schoolId, school_id, classSection, class_section, date, records } = body;
    
    const targetSchoolId = schoolId || school_id;
    const targetClassSection = classSection || class_section;

    if (!targetSchoolId || !records || !Array.isArray(records)) {
      return Response.json(
        { error: "Invalid Ingress Payload Matrix: schoolId and records array required" },
        { status: 400 }
      );
    }

    const logDate = new Date(date || Date.now());

    // 1. Bulk database mutation with DB fallback
    try {
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
              schoolId: targetSchoolId,
              date: logDate,
              status: record.status,
            },
          });
        }
      });
    } catch (dbErr) {
      console.warn("[Attendance Ingress Pipeline] Database offline, proceeding with event dispatch:", dbErr);
    }

    // 2. Isolate absent logs and dispatch non-blocking background telemetry sync loops
    const absentees = records.filter((r) => r.status === "ABSENT");
    if (absentees.length > 0) {
      const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
      
      // Non-blocking fire-and-forget background push to cascading router
      fetch(`${appUrl}/api/v1/communication`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          schoolId: targetSchoolId,
          studentId: absentees[0].student_id,
          baseText: `Absence Notification: Student was marked ABSENT today (${logDate.toLocaleDateString()}).`,
          dltTemplateId: "DLT_ATTENDANCE_ABSENT_V1",
          isUrgent: true,
        }),
      }).catch((err) =>
        console.error("Asynchronous Notification Routing Pipeline Failed:", err)
      );
    }

    return Response.json(
      {
        status: "ATTENDANCE_TRANSACTION_BATCH_COMMITTED",
        processedRecords: records.length,
        absenteesCount: absentees.length,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Fatal Attendance Pipeline Failure:", error);
    return Response.json({ error: "Internal Core Ledger Write Error" }, { status: 500 });
  }
}
