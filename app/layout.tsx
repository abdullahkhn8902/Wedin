import type { Metadata } from "next";
import {
  Great_Vibes,
  Cormorant_Garamond,
  Lora,
  Aref_Ruqaa,
} from "next/font/google";
import "./globals.css";
import { OG_ALT, OG_SIZE } from "./_og/invite-image";
import { COUPLE } from "./wedding";

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

const title = `${COUPLE} | Wedding Invitation`;
const description =
  "Binte Shakir & Afaq Ishaq are getting married in Lahore. Join us for the BBQ Dinner & Mehndi on Friday 21 August, the Barat on Saturday 22 August, and the Walima reception on Sunday 23 August 2026.";

// Chat apps clip the preview caption after ~2 lines, so the card gets a shorter
// version of the page description — the full one still goes to search engines.
const shareDescription =
  "Three celebrations in Lahore — BBQ Dinner & Mehndi on Fri 21 August, Barat on Sat 22 August, and Walima on Sun 23 August 2026.";

const shareTitle = `You're Invited — ${COUPLE}`;

// Declared explicitly (rather than via the `opengraph-image.tsx` convention) so
// the URL ends in `.jpg` and carries its dimensions — that combination is what
// makes WhatsApp render the LARGE preview card, with the image full-width on
// top and the title/description beneath it, instead of a small side thumbnail.
// See app/og.jpg/route.tsx.
const shareImage = {
  url: "/og.jpg",
  width: OG_SIZE.width,
  height: OG_SIZE.height,
  type: "image/jpeg",
  alt: OG_ALT,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    url: "/",
    siteName: `${COUPLE} Wedding`,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: [shareImage],
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
