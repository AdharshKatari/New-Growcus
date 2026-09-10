"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Globe, Shield, ArrowRight } from "lucide-react";

const LANGUAGES = [
  { code: "en", name: "English", script: "English" },
  { code: "hi", name: "Hindi", script: "हिन्दी" },
  { code: "te", name: "Telugu", script: "తెలుగు" },
  { code: "ta", name: "Tamil", script: "தமிழ்" },
  { code: "kn", name: "Kannada", script: "కన్నడ" },
  { code: "ml", name: "Malayalam", script: "മലയാളം" },
  { code: "mr", name: "Marathi", script: "मराठी" },
  { code: "bn", name: "Bengali", script: "বাংলা" },
  { code: "gu", name: "Gujarati", script: "ગુજરાતી" },
  { code: "pa", name: "Punjabi", script: "ਪੰਜਾਬੀ" },
  { code: "or", name: "Odia", script: "ଓଡ଼ିଆ" },
  { code: "ur", name: "Urdu", script: "اردو" },
];

export default function RegisterPage() {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState("en");
  const [name, setName] = useState("");
  const [licenseKey, setLicenseKey] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Account Provisioned in ${selectedLang}! Redirecting to login.`);
    router.push("/login");
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
      <div className="text-center mb-6">
        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mx-auto mb-2">
          <Globe className="w-5 h-5 text-slate-700" />
        </div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Multilingual Account Provisioning
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Select native script language (Supports 12 Regional Languages)
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 12-Language Selector Grid */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Interface Language Selection
          </label>
          <div className="grid grid-cols-3 gap-2">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => setSelectedLang(lang.code)}
                className={`p-2 rounded-lg border text-left text-xs transition-all duration-150 ${
                  selectedLang === lang.code
                    ? "border-[--color-pay] bg-emerald-50 text-emerald-950 font-bold"
                    : "border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700"
                }`}
              >
                <span className="block font-medium">{lang.name}</span>
                <span className="text-[10px] text-slate-500">{lang.script}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ramesh Kumar"
            className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            School License Key / Code
          </label>
          <input
            type="text"
            required
            value={licenseKey}
            onChange={(e) => setLicenseKey(e.target.value)}
            placeholder="e.g. GROWCUS-DEMO-2026"
            className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800 font-mono"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            WhatsApp Phone Number
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="98765 43210"
            className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800 font-mono"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[--color-pay] hover:bg-[--color-pay-light] text-white font-bold text-xs rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.98]"
        >
          <span>Provision Multilingual Account</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
