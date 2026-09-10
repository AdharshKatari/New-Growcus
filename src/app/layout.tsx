import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Growcus — School Discovery Marketplace & Modular ERP",
  description: "Hybrid B2C school discovery marketplace, modular school ERP, and AI teacher co-pilot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-slate-50 text-slate-900 font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
