import { UpiPayButton } from '@/components/parent/UpiPayButton';
import Link from 'next/link';

export default function ParentOverview() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Parent Portal — Aarav's Dashboard</h1>
          <p className="text-slate-500 text-sm">Class 8-A | Delhi Public School, Vasant Kunj</p>
        </div>
        <div className="flex items-center gap-3">
          <UpiPayButton
            amount={14500}
            payeeVpa="dpsvasantkunj@upi"
            payeeName="DPS Vasant Kunj"
            transactionNote="Q3 Tuition Fee - Aarav Sharma"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase">Today's Attendance</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold text-emerald-600">Present ✓</span>
            <span className="text-xs text-slate-500">In school since 08:15 AM</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase">Fee Status (Q3)</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold text-rose-600">₹14,500</span>
            <span className="text-xs text-rose-600 font-medium">Due 15 Sep</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase">Recent Grade</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold text-slate-900">A1 (92%)</span>
            <span className="text-xs text-indigo-600 font-medium">Math Mid-Term</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase">Bus Location</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold text-emerald-600">On Route</span>
            <span className="text-xs text-slate-500">Route #12</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4">
          <h2 className="font-semibold text-slate-900">Recent Teacher Updates & Circulars</h2>
          <div className="space-y-3">
            <div className="p-3 bg-slate-50 rounded-lg">
              <span className="text-xs font-semibold text-indigo-600">Teacher Note — Meera Sharma</span>
              <p className="text-sm font-medium text-slate-800 mt-1">"Aarav performed exceptionally well in the Mathematics lab activity today!"</p>
              <p className="text-xs text-slate-400 mt-1">Yesterday, 3:30 PM</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4">
          <h2 className="font-semibold text-slate-900">Quick Parent Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/parent/fees" className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center hover:bg-slate-100">
              <p className="text-sm font-bold text-slate-800">Pay Fees</p>
              <p className="text-xs text-slate-500">UPI Instant Receipt</p>
            </Link>
            <Link href="/parent/leave" className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center hover:bg-slate-100">
              <p className="text-sm font-bold text-slate-800">Apply Leave</p>
              <p className="text-xs text-slate-500">Digital Leave Application</p>
            </Link>
            <Link href="/parent/appointments" className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center hover:bg-slate-100">
              <p className="text-sm font-bold text-slate-800">Book PTM</p>
              <p className="text-xs text-slate-500">Teacher Slot Booking</p>
            </Link>
            <Link href="/parent/transport" className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center hover:bg-slate-100">
              <p className="text-sm font-bold text-slate-800">Live Bus Tracking</p>
              <p className="text-xs text-slate-500">GPS Bus Location</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
