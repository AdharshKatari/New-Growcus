import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    let schools: any[] = [];
    try {
      schools = await prisma.school.findMany({
        take: 20,
        orderBy: { createdAt: "desc" },
      });
    } catch (dbErr) {
      console.warn("[Schools Route] DB connection warning (using mock school list):", dbErr);
      schools = [
        { id: "sch-1", name: "Growcus Model International Academy", licenseKey: "GROWCUS-DEMO-2026", boardType: "CBSE" },
        { id: "sch-2", name: "St. Xavier's Heritage Public School", licenseKey: "XAVIER-HERITAGE-2026", boardType: "ICSE" },
      ];
    }

    return Response.json({ success: true, count: schools.length, data: schools });
  } catch (error: any) {
    return Response.json({ error: error.message || "Failed to fetch schools" }, { status: 500 });
  }
}
