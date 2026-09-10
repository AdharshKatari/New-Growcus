"use client";

import { useState } from "react";
import { CheckCircle, XCircle, Award, RotateCcw, ArrowRight } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "If the roots of the quadratic equation x² - 5x + k = 0 differ by 1, what is the value of k?",
    options: ["k = 6", "k = 4", "k = 5", "k = 12"],
    correctIndex: 0,
    explanation: "Let roots be α and β. α - β = 1. (α + β)² - 4αβ = (α - β)² → 5² - 4k = 1 → 25 - 1 = 4k → 4k = 24 → k = 6.",
  },
  {
    id: 2,
    question: "Which of the following is the standard form of a quadratic equation in one variable?",
    options: ["ax + b = 0", "ax² + bx + c = 0 (a ≠ 0)", "ax³ + bx² + c = 0", "a/x + b = c"],
    correctIndex: 1,
    explanation: "A quadratic equation in standard form is written as ax² + bx + c = 0 where a, b, c are real numbers and a ≠ 0.",
  },
  {
    id: 3,
    question: "What is the discriminant of 2x² - 4x + 3 = 0?",
    options: ["D = 8", "D = -8", "D = 16", "D = -16"],
    correctIndex: 1,
    explanation: "Discriminant D = b² - 4ac. Here a=2, b=-4, c=3. D = (-4)² - 4(2)(3) = 16 - 24 = -8.",
  },
];

export default function AssessmentPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setIsAnswered(false);
    setIsCompleted(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">AI Adaptive Assessment Arena</h1>
        <p className="text-slate-500 text-sm">Interactive adaptive practice session with instant explanation feedback.</p>
      </div>

      {!isCompleted ? (
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6 shadow-sm">
          <div className="flex justify-between items-center pb-4 border-b border-slate-100">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              Question {currentIdx + 1} of {QUESTIONS.length}
            </span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Score: {score} / {QUESTIONS.length}
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentQ.options.map((opt, i) => {
                let btnStyle = "border-slate-200 hover:border-indigo-600 hover:bg-indigo-50/50 text-slate-800";
                if (isAnswered) {
                  if (i === currentQ.correctIndex) {
                    btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                  } else if (i === selectedOption) {
                    btnStyle = "border-rose-500 bg-rose-50 text-rose-950 font-bold";
                  } else {
                    btnStyle = "border-slate-200 opacity-50";
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(i)}
                    disabled={isAnswered}
                    className={`p-4 text-left border rounded-xl font-medium text-sm transition-all duration-150 flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <span>{String.fromCharCode(65 + i)}. {opt}</span>
                    {isAnswered && i === currentQ.correctIndex && (
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered && i === selectedOption && i !== currentQ.correctIndex && (
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="p-4 bg-indigo-50/80 rounded-xl border border-indigo-100 text-xs text-indigo-950 space-y-1 mt-4">
                <span className="font-bold text-indigo-900 block">💡 AI Concept Explanation:</span>
                <p>{currentQ.explanation}</p>
              </div>
            )}
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-xs shadow-xs disabled:opacity-40 flex items-center gap-1.5 cursor-pointer"
            >
              <span>{currentIdx < QUESTIONS.length - 1 ? "Next Question" : "Complete Assessment"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-5 shadow-sm">
          <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-900">Assessment Complete!</h2>
            <p className="text-xs text-slate-500 mt-1">Great job testing your knowledge on Quadratic Equations.</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 max-w-xs mx-auto">
            <span className="text-xs font-semibold text-slate-500 block uppercase">Final Score</span>
            <span className="text-3xl font-black text-indigo-600 mt-1 block">
              {score} / {QUESTIONS.length}
            </span>
            <span className="text-[11px] font-bold text-emerald-600 mt-1 block">
              {((score / QUESTIONS.length) * 100).toFixed(0)}% Mastery Achieved
            </span>
          </div>

          <button
            onClick={handleRestart}
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-xs shadow-xs inline-flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Practice Quiz</span>
          </button>
        </div>
      )}
    </div>
  );
}
