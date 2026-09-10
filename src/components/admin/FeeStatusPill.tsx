import { cn } from "@/lib/utils";

interface FeeStatusPillProps {
  status: "SETTLED" | "PENDING" | "FAILED" | string;
}

export function FeeStatusPill({ status }: FeeStatusPillProps) {
  const isSettled = status === "SETTLED";
  const isPending = status === "PENDING";
  const isFailed = status === "FAILED";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border",
        isSettled && "bg-emerald-50 text-emerald-700 border-emerald-200",
        isPending && "bg-amber-50 text-amber-700 border-amber-200",
        isFailed && "bg-red-50 text-red-700 border-red-200"
      )}
    >
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full",
          isSettled && "bg-emerald-500",
          isPending && "bg-amber-500",
          isFailed && "bg-red-500"
        )}
      />
      {status}
    </span>
  );
}
