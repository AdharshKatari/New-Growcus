export interface AiGenerationOptions {
  prompt: string;
  systemInstruction?: string;
  temperature?: number;
  maxTokens?: number;
}

export interface AiServiceAdapter {
  generateText(options: AiGenerationOptions): Promise<string>;
  generateLessonPlan(subject: string, topic: string, grade: string): Promise<string>;
  generateExamQuestions(subject: string, grade: string, count: number, difficulty: string): Promise<string>;
  generateReportCardRemark(studentName: string, performance: string, behavior: string): Promise<string>;
}
