import { getAiAdapter } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const { prompt, systemInstruction, temperature } = await req.json();

    if (!prompt) {
      return Response.json({ error: "Prompt is required" }, { status: 400 });
    }

    const aiAdapter = getAiAdapter();
    const responseText = await aiAdapter.generateText({
      prompt,
      systemInstruction,
      temperature,
    });

    return Response.json({ success: true, text: responseText });
  } catch (error: any) {
    console.error("AI Generation Route Error:", error);
    return Response.json({ error: error.message || "Failed to generate AI response" }, { status: 500 });
  }
}
