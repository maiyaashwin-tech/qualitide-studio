import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qualitide Studio",
  description: "Data-driven motion graphics for tier-1 SaaS brands",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
