"use client";

import { useState } from "react";
import { Sparkles, MessageSquare } from "lucide-react";

export default function OnboardingQuestionnairePage() {
  const [messages, setMessages] = useState([
    { sender: "AI", text: "Hello! I am the Growcus Socratic Intake Guide. What is your child's primary learning goal or board preference (CBSE / ICSE)?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    const newMsgs = [...messages, { sender: "USER", text: input }];
    setMessages(newMsgs);
    setInput("");

    setTimeout(() => {
      setMessages([...newMsgs, { sender: "AI", text: "Thank you! Based on your preference for CBSE with strong sports infrastructure, I recommend Growcus Model International Academy." }]);
    }, 1000);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Parent Intake & Screening Questionnaire
        </h1>
        <p className="text-xs text-slate-500">
          Socratic AI chatbot onboarding assistant (PRD MP-06)
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4 flex flex-col justify-between h-96">
        <div className="flex-1 space-y-3 text-xs overflow-y-auto pr-1">
          {messages.map((m, i) => (
            <div key={i} className={`p-3 rounded-xl max-w-xs ${m.sender === "AI" ? "bg-violet-50 text-violet-950 border border-violet-100 font-medium" : "bg-slate-900 text-white ml-auto font-medium"}`}>
              {m.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="flex gap-2 border-t pt-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your response..."
            className="flex-1 px-3 py-2 text-xs bg-slate-50 border rounded-lg"
          />
          <button type="submit" className="px-4 py-2 bg-violet-600 text-white text-xs font-bold rounded-lg">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
