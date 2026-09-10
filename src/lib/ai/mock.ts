import { AiGenerationOptions, AiServiceAdapter } from "./adapter";

export class MockAiAdapter implements AiServiceAdapter {
  async generateText(options: AiGenerationOptions): Promise<string> {
    return `[Orbit AI Mock Response] Processed prompt: "${options.prompt.slice(0, 50)}..."`;
  }

  async generateLessonPlan(subject: string, topic: string, grade: string): Promise<string> {
    return `### Lesson Plan: ${topic} (${subject} - Grade ${grade})
**Duration:** 45 Minutes | **Board:** CBSE Compliant

#### 1. Objectives (5 Mins)
- Understand core concepts of ${topic} through real-world Indian examples.
- Master key definitions and formulas for board assessments.

#### 2. Core Instruction & Socratic Script (20 Mins)
- **Concept Intro:** Relate ${topic} to daily life (e.g. railway schedules, market transactions).
- **Key Equation/Rule:** Step-by-step breakdown on blackboard.

#### 3. Student Activity (15 Mins)
- Group discussion & 3 practice problems in pairs.

#### 4. Homework & Reflection (5 Mins)
- Complete Exercises 1-4 from NCERT Chapter 5.`;
  }

  async generateExamQuestions(subject: string, grade: string, count: number, difficulty: string): Promise<string> {
    return `### ${subject} Assessment Paper — Grade ${grade}
**Time:** 60 Mins | **Total Marks:** 25 | **Difficulty:** ${difficulty}

**Section A: Multiple Choice (1 Mark Each)**
1. What is the fundamental unit of measurement in this topic?
   (a) Option A  (b) Option B  (c) Option C  (d) Option D

2. Which of the following best demonstrates the principal law?
   (a) Scenario 1  (b) Scenario 2  (c) Scenario 3

**Section B: Short Answer (3 Marks Each)**
3. Explain the primary difference between physical and conceptual models.
4. Calculate the resulting value given a 15% increase in initial baseline.

**Section C: Long Answer (5 Marks)**
5. Derive the core relation and provide two practical industrial applications in modern India.

---
### Answer Key & Marking Scheme
1. (b) | 2. (a)
3. Full marks for mentioning structural vs functional differences with example.
4. Correct formula (1.5 marks) + final value (1.5 marks).
5. Step-by-step derivation breakdown.`;
  }

  async generateReportCardRemark(studentName: string, performance: string, behavior: string): Promise<string> {
    return `${studentName} has demonstrated ${performance} throughout the term. ${studentName} maintains a ${behavior} in class, actively contributing to group activities. With continued focus on analytical problem-solving, ${studentName} is well-positioned for top academic honors.`;
  }
}
