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
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* User's High-Res 3D Metallic Shield Emblem */}
      <div className={`relative shrink-0 ${iconSizes[size]}`}>
        <img
          src="/brand/growcus-shield-logo.png"
          alt="Growcus Shield Emblem"
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-black tracking-tight ${textSizes[size]} ${
              variant === "light"
                ? "text-white"
                : variant === "dark"
                ? "text-slate-950"
                : "bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 bg-clip-text text-transparent"
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
