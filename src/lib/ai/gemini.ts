import { GoogleGenerativeAI } from "@google/generative-ai";
import { AiGenerationOptions, AiServiceAdapter } from "./adapter";

export class GeminiAiAdapter implements AiServiceAdapter {
  private genAI: GoogleGenerativeAI;
  private modelName: string;

  constructor(apiKey?: string, modelName = "gemini-3.6-flash") {
    const key = apiKey || process.env.GEMINI_API_KEY || "";
    this.genAI = new GoogleGenerativeAI(key);
    this.modelName = modelName;
  }

  async generateText(options: AiGenerationOptions): Promise<string> {
    try {
      const model = this.genAI.getGenerativeModel({
        model: this.modelName,
        systemInstruction: options.systemInstruction,
      });
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: options.prompt }] }],
        generationConfig: {
          temperature: options.temperature ?? 0.7,
          maxOutputTokens: options.maxTokens ?? 1024,
        },
      });
      return result.response.text();
    } catch (error) {
      console.error("Gemini AI API Error:", error);
      throw error;
    }
  }

  async generateLessonPlan(subject: string, topic: string, grade: string): Promise<string> {
    const prompt = `Create a detailed 45-minute lesson plan for ${grade} ${subject} on the topic "${topic}". Include Learning Objectives, Warm-up (5 mins), Core Instruction (20 mins), Interactive Activity (15 mins), and Closure/Homework (5 mins).`;
    return this.generateText({
      prompt,
      systemInstruction: "You are Orbit AI, an expert CBSE/ICSE curriculum co-pilot for Indian teachers.",
    });
  }

  async generateExamQuestions(subject: string, grade: string, count: number, difficulty: string): Promise<string> {
    const prompt = `Generate an exam paper with ${count} questions for Grade ${grade} ${subject}. Difficulty level: ${difficulty}. Format with clear section headers, marks allocation per question, and an Answer Key at the bottom.`;
    return this.generateText({
      prompt,
      systemInstruction: "You are an expert CBSE board examiner creating balanced assessment papers.",
    });
  }

  async generateReportCardRemark(studentName: string, performance: string, behavior: string): Promise<string> {
    const prompt = `Write a professional, constructive 2-3 sentence report card remark for student ${studentName}. Academic Performance: ${performance}. Classroom Behavior & Attitude: ${behavior}.`;
    return this.generateText({
      prompt,
      systemInstruction: "You are an empathetic school teacher writing personalized end-of-term student feedback.",
    });
  }
}
