import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competitive Snapshot Studio",
  description: "Competitor intelligence without the headache.",
  openGraph: { title: "Competitive Snapshot Studio", description: "Quick comp checks", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-hero-gradient bg-fixed">
        <nav className="px-6 py-4 flex items-center justify-between">
          <span className="font-semibold tracking-tight">CSS</span>
          <a href="/pricing" className="opacity-75 hover:opacity-100">Pricing</a>
        </nav>
        <main className="max-w-5xl mx-auto px-6">{children}</main>
        <footer className="text-xs opacity-70 px-6 py-10">Made by Rahul Baugh</footer>
      </body>
    </html>
  )
}
