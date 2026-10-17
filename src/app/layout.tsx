import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "./site.css";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.knappbuiltmachines.com"),
  title: {
    default: "Knapp-Built Machines \u2014 Custom Agricultural Packaging & Processing Equipment",
    template: "%s \u2014 Knapp-Built Machines",
  },
  description:
    "Family-owned since 2008 in Hammonton, NJ. Knapp-Built Machines designs, builds, and services custom stainless vegetable washers, bin washers, and conveyors for growers and packing houses.",
  openGraph: {
    title: "Knapp-Built Machines",
    description:
      "Custom agricultural packaging and vegetable processing equipment, designed and built in Hammonton, NJ.",
    url: "https://www.knappbuiltmachines.com",
    siteName: "Knapp-Built Machines",
    type: "website",
    images: ["/photos/hero-build.jpg"],
  },
  icons: { icon: "/mark.png", apple: "/mark.png" },
};

export const viewport: Viewport = {
  themeColor: "#0b0c0e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
