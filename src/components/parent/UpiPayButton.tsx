"use client";

import { useState } from "react";
import { CreditCard, CheckCircle2, QrCode, Loader2, X } from "lucide-react";
import { buildUpiLink, formatCurrency } from "@/lib/utils";

interface UpiPayButtonProps {
  amount: number;
  payeeName?: string;
  payeeVpa?: string;
  transactionNote?: string;
  onSuccess?: () => void;
}

export function UpiPayButton({
  amount,
  payeeName = "Growcus Model Academy",
  payeeVpa = "growcus@upi",
  transactionNote = "Q3 Term Fee Settlement",
  onSuccess,
}: UpiPayButtonProps) {
  const [paid, setPaid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSettling, setIsSettling] = useState(false);

  const upiUrl = buildUpiLink({
    pa: payeeVpa,
    pn: payeeName,
    am: amount,
    tn: transactionNote,
  });

  const triggerSettlementWebhook = async () => {
    setIsSettling(true);
    try {
      const res = await fetch("/api/v1/webhooks/npci-upi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          upi_txn_id: `UPI-${Date.now()}`,
          student_id: "demo-student-id",
          school_id: "demo-school-id",
          amount_paid: amount,
          status: "SETTLED",
        }),
      });
      const data = await res.json();
      if (data.received || data.success || res.ok) {
        setPaid(true);
        setIsModalOpen(false);
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      console.error("UPI settlement webhook error:", err);
    } finally {
      setIsSettling(false);
    }
  };

  if (paid) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-lg border border-emerald-200 shadow-xs">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
        <span>UPI Settled: {formatCurrency(amount)} (Receipt Generated)</span>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow-sm transition-all duration-150 active:scale-[0.98] cursor-pointer"
      >
        <CreditCard className="w-4 h-4" />
        <span>Pay {formatCurrency(amount)} via Instant UPI</span>
      </button>

      {/* NPCI Dynamic UPI Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-sm w-full p-6 text-center space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="font-bold text-xs text-emerald-700 uppercase tracking-wider">NPCI Dynamic UPI Pay</span>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <p className="text-xs text-slate-500">{payeeName}</p>
              <h3 className="text-2xl font-black text-slate-900 mt-0.5">{formatCurrency(amount)}</h3>
              <p className="text-[11px] text-slate-400 font-mono mt-1">VPA: {payeeVpa}</p>
            </div>

            {/* QR Code Container */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col items-center justify-center space-y-2">
              <div className="w-36 h-36 bg-white border-2 border-slate-900 rounded-lg flex items-center justify-center p-2 shadow-inner">
                <QrCode className="w-28 h-28 text-slate-900" />
              </div>
              <p className="text-[10px] text-slate-500 font-medium">Scan with GPay, PhonePe, Paytm or BHIM</p>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={triggerSettlementWebhook}
                disabled={isSettling}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSettling ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <CheckCircle2 className="w-4 h-4" />
                )}
                <span>{isSettling ? "Verifying NPCI Settlement..." : "Simulate Instant UPI Payment (Dev)"}</span>
              </button>

              <a
                href={upiUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-[11px] font-semibold text-slate-500 hover:text-indigo-600"
              >
                Or Open Mobile App Direct Deep Link →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
