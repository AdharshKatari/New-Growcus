import { AiServiceAdapter } from "./adapter";
import { GeminiAiAdapter } from "./gemini";
import { MockAiAdapter } from "./mock";

export * from "./adapter";
export * from "./gemini";
export * from "./mock";

export function getAiAdapter(): AiServiceAdapter {
  if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.length > 5) {
    return new GeminiAiAdapter();
  }
  return new MockAiAdapter();
}
