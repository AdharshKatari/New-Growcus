"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Building2,
  Shield,
  Zap,
  ArrowRight,
  Calculator,
  HelpCircle,
  PhoneCall,
  CheckCircle2,
  Sparkles,
  Users,
  CreditCard,
  Layers,
  Send
} from "lucide-react";
import { cn } from "@/lib/utils";

const pricingTiers = [
  {
    name: "Starter Campus",
    desc: "Ideal for Standalone Primary & Middle Schools (Up to 500 Students)",
    pricePerStudent: "₹15",
    billingCycle: "per student / month",
    popular: false,
    badge: "For Small Schools",
    features: [
      "Unified Multi-Portal (Admin, Teacher, Parent, Student)",
      "WhatsApp & DLT SMS Attendance Alerts",
      "Instant NPCI UPI Fee Collection & Receipt Generator",
      "Digital Gradebook & Report Card PDF Engine",
      "Basic Student & Staff Record Database",
      "Standard Email & Chat Support",
    ],
    cta: "Start 14-Day Free Trial",
    gradient: "border-slate-200 bg-white",
    buttonClass: "bg-slate-900 hover:bg-slate-800 text-white",
  },
  {
    name: "Pro Academy",
    desc: "For K-12 Academies & High Schools Seeking Automation (Up to 2,000 Students)",
    pricePerStudent: "₹25",
    billingCycle: "per student / month",
    popular: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter Campus, plus:",
      "AI Lesson Co-pilot & Remarks Generator (Gemini Powered)",
      "Fee Ledger & Tally/Excel Financial Export",
      "Real-time GPS Bus Transport Tracking System",
      "PWA Offline Attendance Engine (Dead Zone Compliant)",
      "Automated Admissions CRM & Lead Funnel Pipeline",
      "Priority 2-Hour SLA Phone & WhatsApp Support",
    ],
    cta: "Onboard School Now",
    gradient: "border-blue-500/50 bg-gradient-to-b from-blue-50/50 via-white to-white shadow-xl ring-2 ring-blue-600/20",
    buttonClass: "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-md",
  },
  {
    name: "Enterprise Chain",
    desc: "For Multi-Branch Educational Trusts & Group Institutions (2,000+ Students)",
    pricePerStudent: "Custom",
    billingCycle: "flat annual licensing",
    popular: false,
    badge: "Multi-Branch ERP",
    features: [
      "Everything in Pro Academy, plus:",
      "Multi-Branch Centralized Treasury & Consolidated Reports",
      "On-Premise 4G Edge SIM Box Orchestration (Hybrid Node)",
      "White-Labeled Mobile App (Your School Brand on Play Store)",
      "Dedicated Account Manager & On-Site Staff Training",
      "Custom API Integrations & Database Migration Service",
      "99.99% Uptime SLA Guarantee",
    ],
    cta: "Contact Enterprise Sales",
    gradient: "border-slate-300 bg-white",
    buttonClass: "bg-slate-900 hover:bg-slate-800 text-white",
  },
];

const faqs = [
  {
    q: "How long does it take to set up Growcus in our school?",
    a: "Our onboarding team handles complete data migration from Excel, Tally, or legacy ERPs within 24 hours. Your teachers and administrative staff can start using the portal immediately with zero technical setup.",
  },
  {
    q: "Is there any hidden cost for WhatsApp alerts?",
    a: "No! Growcus includes a hybrid communication engine that automatically routes urgent alerts via PWA push notifications and DLT-registered A2P SMS to keep messaging costs at absolute zero.",
  },
  {
    q: "Can parents pay school fees directly via UPI?",
    a: "Yes. Parents receive automated payment links via WhatsApp and can pay tuition/transport fees directly using GPay, PhonePe, Paytm, or BHIM. Funds land directly in your school's bank account with instant automated receipt generation.",
  },
  {
    q: "Does Growcus work offline inside classrooms with poor mobile coverage?",
    a: "Yes. Our Progressive Web App (PWA) teacher engine allows teachers to mark attendance and gradebooks completely offline. Data automatically syncs silently back to the database as soon as network connectivity is restored.",
  },
];

export default function PricingAndBusinessPage() {
  const [studentCount, setStudentCount] = useState(800);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    principalName: "",
    mobile: "",
    city: "",
    students: "500-1000",
  });

  // Calculate estimated monthly savings vs traditional ERP + WhatsApp API costs
  const monthlyErpCost = Math.round(studentCount * 25);
  const estimatedSavings = Math.round(studentCount * 38); // Savings from automated fees, low SMS cost, paperless receipts

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.schoolName || !formData.mobile) return;
    setDemoSubmitted(true);
  };

  return (
    <div className="space-y-12 max-w-6xl mx-auto py-4">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full border border-blue-200">
          🚀 Simple, Predictable School Pricing
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Transform Your Campus with India's Most Advanced School ERP
        </h1>
        <p className="text-sm md:text-base text-slate-600">
          Zero upfront setup fee · Automated UPI fee collection · WhatsApp & DLT SMS alerts · 24-hour data migration
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "rounded-2xl p-6 border flex flex-col justify-between transition-all duration-200 relative",
              tier.gradient
            )}
          >
            {tier.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-md">
                {tier.badge}
              </span>
            )}

            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
                {!tier.popular && (
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {tier.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">{tier.desc}</p>

              <div className="flex items-baseline gap-1 my-4 pb-4 border-b border-slate-100">
                <span className="text-3xl font-extrabold text-slate-900">{tier.pricePerStudent}</span>
                <span className="text-xs text-slate-500 font-medium">{tier.billingCycle}</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#book-demo"
              className={cn(
                "w-full py-3 rounded-xl font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]",
                tier.buttonClass
              )}
            >
              <span>{tier.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      {/* Interactive ROI & Savings Calculator */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-1">
              <Calculator className="w-4 h-4" />
              <span>Interactive School Savings Calculator</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold">Calculate Your Campus ROI & Annual Savings</h2>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400 block">Estimated Annual Net Savings</span>
            <span className="text-2xl md:text-3xl font-extrabold text-emerald-400">
              ₹{(estimatedSavings * 12).toLocaleString("en-IN")} / year
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs font-bold">
              <span>Total Enrolled Students:</span>
              <span className="text-lg text-blue-400 font-mono">{studentCount} Students</span>
            </div>
            <input
              type="range"
              min="100"
              max="3000"
              step="50"
              value={studentCount}
              onChange={(e) => setStudentCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>100 Students</span>
              <span>1,500 Students</span>
              <span>3,000+ Students</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
              <span className="text-slate-400 block">Est. Growcus Subscription</span>
              <span className="text-base font-bold text-white mt-1 block">₹{monthlyErpCost.toLocaleString("en-IN")}/mo</span>
            </div>
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <span className="text-emerald-300 block">Manual Labor & Paper Saved</span>
              <span className="text-base font-bold text-emerald-400 mt-1 block">₹{estimatedSavings.toLocaleString("en-IN")}/mo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Book Demo & School Onboarding Form */}
      <div id="book-demo" className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
            📞 Direct School Onboarding
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-3 tracking-tight">
            Schedule a Personalized Product Demo for Your Management Team
          </h2>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Our educational technology specialists will demonstrate how Growcus seamlessly manages attendance, automated fee collection, report cards, and parent communications for your school.
          </p>

          <div className="mt-6 space-y-3 text-xs text-slate-700 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>14-Day Full Access Risk-Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Free Data Migration from Legacy Systems</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Dedicated Staff Onsite/Online Training</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Direct Sales Hotline</p>
              <p className="text-xs text-blue-700 font-mono font-bold">+91 98765 43210 / sales@growcus.com</p>
            </div>
          </div>
        </div>

        <div>
          {demoSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3 my-auto">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-emerald-900">Demo Request Received!</h3>
              <p className="text-xs text-emerald-700">
                Thank you <strong>{formData.principalName || "School Director"}</strong>. Our executive implementation team will contact you at <strong>+91 {formData.mobile}</strong> within 2 hours.
              </p>
              <button
                onClick={() => setDemoSubmitted(false)}
                className="text-xs font-bold text-emerald-800 underline mt-2"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleDemoSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">School / Institution Name *</label>
                <input
                  type="text"
                  required
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  placeholder="e.g. St. Xavier's International School"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name & Designation</label>
                  <input
                    type="text"
                    value={formData.principalName}
                    onChange={(e) => setFormData({ ...formData, principalName: e.target.value })}
                    placeholder="Principal / Director"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="98765 43210"
                    maxLength={10}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">City / Location</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. New Delhi"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Approx Student Strength</label>
                  <select
                    value={formData.students}
                    onChange={(e) => setFormData({ ...formData, students: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="<500">Under 500 Students</option>
                    <option value="500-1000">500 – 1,000 Students</option>
                    <option value="1000-2500">1,000 – 2,500 Students</option>
                    <option value="2500+">2,500+ Students (Chain)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Request 14-Day Free School Demo</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <span>Frequently Asked Questions by School Principals</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
              <h3 className="font-bold text-xs text-slate-900">{faq.q}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
