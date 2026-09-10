"use client";

import { useState } from "react";
import { Sparkles, Loader2, X, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface AiActionButtonProps {
  label: string;
  prompt?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function AiActionButton({
  label,
  prompt = "Generate a NEP 2020 aligned lesson plan for Grade 8 Mathematics on Quadratic Equations.",
  onClick,
  isLoading: externalLoading = false,
  disabled = false,
  className,
  size = "md",
}: AiActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [customPrompt, setCustomPrompt] = useState(prompt);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (onClick) {
      onClick();
      return;
    }

    setIsOpen(true);
    if (!response) {
      triggerAiCall(customPrompt);
    }
  };

  const triggerAiCall = async (textToSubmit: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/v1/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: textToSubmit }),
      });
      const data = await res.json();
      if (data.success) {
        setResponse(data.text);
      } else {
        setResponse(`Error: ${data.error || "Failed to generate AI response"}`);
      }
    } catch (err: any) {
      setResponse("Network error calling Gemini AI co-pilot.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (response) {
      navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <button
        onClick={handleGenerate}
        disabled={disabled || externalLoading}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium rounded-lg shadow-sm transition-all duration-150 active:scale-[0.98] cursor-pointer",
          "bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed",
          size === "sm" && "px-3 py-1.5 text-xs",
          size === "md" && "px-4 py-2 text-xs",
          size === "lg" && "px-5 py-2.5 text-sm font-semibold",
          className
        )}
      >
        {externalLoading || loading ? (
          <Loader2 className="w-4 h-4 animate-spin text-white" />
        ) : (
          <Sparkles className="w-4 h-4 text-violet-200" />
        )}
        <span>{label}</span>
      </button>

      {/* Interactive Gemini AI Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-violet-700 font-bold text-base">
                <Sparkles className="w-5 h-5" />
                <span>Growcus AI Co-pilot (Live Gemini 1.5/Flash)</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600 uppercase">Prompt Instruction</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  className="flex-1 border border-slate-200 rounded-lg p-2.5 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-violet-600 font-medium"
                />
                <button
                  onClick={() => triggerAiCall(customPrompt)}
                  disabled={loading}
                  className="px-4 py-2.5 bg-violet-600 text-white rounded-lg text-xs font-bold hover:bg-violet-700 disabled:opacity-50 flex items-center gap-1"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Regenerate"}
                </button>
              </div>
            </div>

            {loading ? (
              <div className="p-8 text-center space-y-3 bg-violet-50/50 rounded-xl border border-violet-100">
                <Loader2 className="w-8 h-8 animate-spin text-violet-600 mx-auto" />
                <p className="text-xs font-semibold text-violet-900">Calling Google Gemini API...</p>
                <p className="text-[11px] text-violet-600">Generating pedagogical content, rubrics & lesson plans.</p>
              </div>
            ) : response ? (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-500 uppercase">AI Output Result</span>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-1 text-xs text-violet-600 hover:text-violet-800 font-semibold"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied!" : "Copy Output"}</span>
                  </button>
                </div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs leading-relaxed font-mono whitespace-pre-wrap max-h-96 overflow-y-auto border border-slate-800">
                  {response}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
