import type { Metadata } from "next";
import { Oswald, Barlow, Share_Tech_Mono } from "next/font/google";
import { SITE } from "@/lib/config";
import "./globals.css";

const display = Oswald({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const body = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const mono = Share_Tech_Mono({ subsets: ["latin"], weight: "400", variable: "--font-mono" });

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.product}`,
  description:
    "Knapp-Built Machines: family-owned agricultural & pallet equipment manufacturer in Hammonton, NJ. Home of Knapp-Built Stack, the Pallet Pattern Creator.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
