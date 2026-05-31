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

// Set NEXT_PUBLIC_SITE_URL to your deployed domain (e.g. https://sobia-suleman.com)
// so the share image resolves to an absolute URL. Vercel auto-detects this; the
// localhost fallback only matters for local previews.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const title = "Sobia & Suleman | Wedding Invitation";
const description =
  "Sobia & Suleman are getting married on Friday, September 4, 2026 at Topaz Event Complex, Lahore. You're invited to celebrate with us.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title: "You're Invited — Sobia & Suleman",
    description,
    url: "/",
    siteName: "Sobia & Suleman Wedding",
    locale: "en_US",
    type: "website",
    // The og:image is supplied automatically by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "You're Invited — Sobia & Suleman",
    description,
    // The twitter:image is supplied automatically by app/twitter-image.tsx
  },
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
