import { UpiPayButton } from '@/components/parent/UpiPayButton';

export default function ParentFeesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Fee Payment & Receipt Ledger</h1>
          <p className="text-slate-500 text-sm">Pay school fees instantly via NPCI dynamic UPI with zero platform fee.</p>
        </div>
        <UpiPayButton amount={14500} payeeVpa="dpsvasantkunj@upi" payeeName="DPS Vasant Kunj" transactionNote="Q3 Tuition Fee - Aarav Sharma" />
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <h2 className="font-semibold text-slate-900">Payment Breakdown (Q3 AY 2026-27)</h2>
        <div className="divide-y divide-slate-100 text-sm">
          <div className="py-2 flex justify-between">
            <span className="text-slate-600">Tuition Fee</span>
            <span className="font-semibold text-slate-900">₹12,000</span>
          </div>
          <div className="py-2 flex justify-between">
            <span className="text-slate-600">Computer & STEM Lab Fee</span>
            <span className="font-semibold text-slate-900">₹1,500</span>
          </div>
          <div className="py-2 flex justify-between">
            <span className="text-slate-600">Transport Fee (Zone 2)</span>
            <span className="font-semibold text-slate-900">₹1,000</span>
          </div>
          <div className="py-3 flex justify-between font-bold text-base border-t border-slate-200">
            <span>Total Payable</span>
            <span className="text-indigo-600">₹14,500</span>
          </div>
        </div>
      </div>
    </div>
  );
}
