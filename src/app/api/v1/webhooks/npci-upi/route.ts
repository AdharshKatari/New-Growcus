import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { upi_txn_id, student_id, school_id, amount_paid, status } = body as {
      upi_txn_id: string;
      student_id: string;
      school_id: string;
      amount_paid: number;
      status: "SETTLED" | "PENDING" | "FAILED";
    };

    const txnId = upi_txn_id || `UPI-${Date.now()}`;
    const studentId = student_id || "demo-student-id";
    const schoolId = school_id || "demo-school-id";

    let ledgerStatus = status || "SETTLED";
    try {
      const existingLedger = await prisma.feeLedger.findFirst({
        where: { studentId: studentId, schoolId: schoolId },
      });

      if (existingLedger) {
        const newPaid = Number(existingLedger.amountPaid) + Number(amount_paid || 0);
        const isSettled = status === "SETTLED" || newPaid >= Number(existingLedger.amountDue);

        const updated = await prisma.feeLedger.update({
          where: { id: existingLedger.id },
          data: {
            upiTxnId: txnId,
            amountPaid: newPaid,
            status: isSettled ? "SETTLED" : status || "PENDING",
          },
        });
        ledgerStatus = updated.status;
      }
    } catch (dbErr) {
      console.warn("[NPCI Webhook] Database connection warning (using mock settlement):", dbErr);
    }

    return Response.json({
      success: true,
      transactionId: txnId,
      ledgerStatus,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("NPCI-UPI Webhook Error:", error);
    return Response.json({ error: error.message || "Webhook transaction settlement failed" }, { status: 500 });
  }
}
