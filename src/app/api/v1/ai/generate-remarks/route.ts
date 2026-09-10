import { getAiAdapter } from "@/lib/ai";

export async function POST(request: Request) {
  try {
    const { studentId, studentName, gradeAverage, attendanceRate } = await request.json();

    if (!studentId || gradeAverage === undefined) {
      return Response.json(
        { error: "Missing Analytics Input Fields: studentId and gradeAverage required" },
        { status: 400 }
      );
    }

    const name = studentName || "the student";
    const promptPayload = `Write a short, highly professional, encouraging 2-sentence report card progress remark for ${name} who has an academic score average of ${gradeAverage}% and a classroom attendance rate of ${attendanceRate ?? 95}%. Highlight strengths and positive potential.`;

    let generatedRemark = "";
    let provider = "LOCAL_SLM_NODE";

    // 1. Try local inference endpoint if configured
    const localEndpoint = process.env.LOCAL_INFERENCE_SERVER_URL;
    if (localEndpoint) {
      try {
        const res = await fetch(localEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "phi3:mini",
            prompt: promptPayload,
            stream: false,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          generatedRemark = data.response?.trim() || "";
        }
      } catch (err) {
        console.warn("Local SLM Inference offline, switching to primary AI adapter:", err);
      }
    }

    // 2. Fallback to Gemini 3.6 Flash / Mock AI adapter
    if (!generatedRemark) {
      provider = "ORBIT_AI_ADAPTER";
      try {
        const adapter = getAiAdapter();
        generatedRemark = await adapter.generateText({
          prompt: promptPayload,
          systemInstruction: "You are an empathetic school teacher writing personalized end-of-term student feedback.",
        });
      } catch {
        generatedRemark = `${name} demonstrates consistent conceptual progress across core evaluation areas. Continued focus on active problem-solving modules will further enhance academic excellence.`;
      }
    }

    return Response.json({
      studentId,
      studentName: name,
      generatedRemark,
      provider,
      infrastructureCost: provider === "LOCAL_SLM_NODE" ? 0.0 : 0.0001,
    });
  } catch (error) {
    console.error("AI Remarks Generator Error:", error);
    return Response.json(
      {
        studentId: "std-fallback",
        generatedRemark: "Demonstrates consistent conceptual progress; focus on active practice modules.",
        provider: "STATIC_FALLBACK",
        infrastructureCost: 0.0,
      },
      { status: 200 }
    );
  }
}
