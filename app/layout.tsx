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

// Origin used to build the ABSOLUTE share-image URL that link-preview crawlers
// fetch. Priority:
//   1. NEXT_PUBLIC_SITE_URL  — set this to your custom domain when you have one.
//   2. Vercel's deployment URL — auto-detected, so previews work with zero config.
//   3. localhost — dev only (link previews can't use this; see note below).
//
// NOTE: link previews CANNOT work against localhost — the app showing the preview
// fetches the image over the public internet, so the site must be deployed (or
// exposed via a tunnel like `ngrok`).
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

const title = "Rehan & Afifa | Wedding Invitation";
const description =
  "Rehan & Afifa are getting married on Friday, June 12, 2026 at Gulzar's Event Complex By SICHUAN, Lahore. You're invited to celebrate with us.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title: "You're Invited — Rehan & Afifa",
    description,
    url: "/",
    siteName: "Rehan & Afifa Wedding",
    locale: "en_US",
    type: "website",
    // The og:image is supplied automatically by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "You're Invited — Rehan & Afifa",
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
