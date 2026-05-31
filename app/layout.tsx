import type { Metadata } from "next";
import {
  Great_Vibes,
  Cormorant_Garamond,
  Lora,
  Aref_Ruqaa,
} from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sobia & Suleman | Wedding Invitation",
  description:
    "Sobia & Suleman are getting married on Friday, September 4, 2026 at Topaz Event Complex, Lahore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${cormorant.variable} ${lora.variable} ${arefRuqaa.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
