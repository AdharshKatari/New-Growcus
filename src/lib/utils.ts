import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number as Indian Rupee currency safely */
export function formatCurrency(amount: number | string | null | undefined): string {
  const num = typeof amount === "number" ? amount : parseFloat(String(amount || 0));
  const safeNum = isNaN(num) ? 0 : num;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(safeNum);
}

/** Format date as "8 Sep 2026" safely */
export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return "—";
  try {
    const d = new Date(date);
    if (isNaN(d.getTime())) return "—";
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(d);
  } catch {
    return "—";
  }
}

/** Format date as "Mon, 8 Sep" safely */
export function formatDateShort(date: Date | string | null | undefined): string {
  if (!date) return "—";
  try {
    const d = new Date(date);
    if (isNaN(d.getTime())) return "—";
    return new Intl.DateTimeFormat("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
    }).format(d);
  } catch {
    return "—";
  }
}

/** Generate initials from a full name safely */
export function getInitials(name?: string | null): string {
  if (!name || typeof name !== "string") return "U";
  const trimmed = name.trim();
  if (!trimmed) return "U";
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

/** Truncate text to a max length safely */
export function truncate(text: string | null | undefined, maxLength: number): string {
  if (!text || typeof text !== "string") return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "…";
}

/** Sleep for ms milliseconds */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Generate a UPI deep-link for GPay / PhonePe safely */
export function buildUpiLink({
  pa,
  pn,
  am,
  tn,
}: {
  pa: string;
  pn: string;
  am: number | string;
  tn: string;
}): string {
  const safePa = pa || "growcus@upi";
  const safePn = pn || "Growcus Academy";
  const safeAm = typeof am === "number" ? am.toString() : String(am || "0");
  const safeTn = tn || "Fee Payment";

  const params = new URLSearchParams({
    pa: safePa,
    pn: safePn,
    am: safeAm,
    cu: "INR",
    tn: safeTn,
  });
  return `upi://pay?${params.toString()}`;
}

/** Status color mapping for fee ledger pills */
export const feeStatusColors: Record<string, string> = {
  SETTLED: "bg-emerald-50 text-emerald-700 border-emerald-300",
  PENDING: "bg-amber-50 text-amber-700 border-amber-300",
  FAILED: "bg-red-50 text-red-600 border-red-300",
};

/** Admission stage label mapping */
export const admissionStageLabels: Record<string, string> = {
  LEAD: "Lead Inflow",
  INQUIRY: "Inquiry",
  INTERVIEW: "Interview",
  DOC_REVIEW: "Doc Review",
  REGISTERED: "Registered",
};
