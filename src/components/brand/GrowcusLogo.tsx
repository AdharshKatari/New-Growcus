import React from "react";

interface GrowcusLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark" | "color";
  showText?: boolean;
}

export function GrowcusLogo({
  className = "",
  size = "md",
  variant = "color",
  showText = true,
}: GrowcusLogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
    xl: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Impressive SVG Emblem: Shield + Rising Node + Spark */}
      <div className={`relative shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          <defs>
            <linearGradient id="growcusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Shield Container */}
          <path
            d="M50 8L88 22V52C88 74.4 71.8 90.8 50 96C28.2 90.8 12 74.4 12 52V22L50 8Z"
            fill="url(#shieldGrad)"
            stroke="url(#growcusGrad)"
            strokeWidth="3.5"
          />

          {/* Inner Rising Growth Arch (G Symbol) */}
          <path
            d="M32 46C32 36.06 40.06 28 50 28C59.94 28 68 36.06 68 46V54C68 63.94 59.94 72 50 72C40.06 72 32 63.94 32 54"
            stroke="url(#growcusGrad)"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Growth Node Bar */}
          <path
            d="M50 50H74"
            stroke="#10B981"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Spark Star */}
          <circle cx="50" cy="50" r="4" fill="#F59E0B" filter="url(#glow)" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-black tracking-tight ${textSizes[size]} ${
              variant === "light"
                ? "text-white"
                : variant === "dark"
                ? "text-slate-950"
                : "bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent"
            }`}
          >
            Growcus
          </span>
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-emerald-600 mt-0.5">
            Smart Campus ERP
          </span>
        </div>
      )}
    </div>
  );
}
