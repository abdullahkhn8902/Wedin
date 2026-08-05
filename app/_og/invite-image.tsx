/* eslint-disable @next/next/no-img-element -- these render inside Satori (next/og), not the DOM */
import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { COUPLE, DATE_LINE, EVENTS, INITIALS } from "../wedding";

/**
 * Shared renderer for the social-share (Open Graph / Twitter) preview image.
 *
 * It mirrors what visitors see *first* on the site: the sealed invitation
 * envelope (cream body, deep-green flap, "B&A" wax seal) resting on the same
 * cream radial background as the intro overlay — with the names, dates and the
 * functions beneath so the share preview still reads at a glance.
 *
 * Generated at request/build time with `next/og` (Satori) using the site fonts.
 * Used by both `app/opengraph-image.tsx` and `app/twitter-image.tsx`.
 */

const FONT_DIR = join(process.cwd(), "assets", "fonts");

const greatVibes = readFileSync(join(FONT_DIR, "GreatVibes-Regular.ttf"));
const cormorant = readFileSync(join(FONT_DIR, "CormorantGaramond-Regular.ttf"));
const cormorantSemi = readFileSync(join(FONT_DIR, "CormorantGaramond-SemiBold.ttf"));

export const OG_SIZE = { width: 1200, height: 630 };

export const OG_ALT = `${COUPLE} — Wedding Invitation. Barat on Saturday 22 August and Walima on Sunday 23 August 2026, in Lahore.`;

// "Barat · 22 Aug — Walima · 23 Aug"
const FUNCTIONS_LINE = EVENTS.map(
  (event) => `${event.name} · ${event.shortDate.replace(/^\w+ /, "")}`,
).join("   —   ");

const cream = "#f1ebdf";
const green = "#3a4634";
const greenSoft = "#6b7563";

// The closed envelope, drawn once as an SVG and embedded as a data URI so the
// triangular flap and V-notch pocket render crisply through resvg. Coordinates
// match the live intro (`.env-*` rules in globals.css): flap apex / seal at the
// centre (270, 202) of a 540 x 320 envelope.
const envelopeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="540" height="320" viewBox="0 0 540 320">
  <defs>
    <linearGradient id="body" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#efe7d4"/>
      <stop offset="1" stop-color="#e4d9c0"/>
    </linearGradient>
    <linearGradient id="pocket" x1="0.1" y1="0" x2="0.5" y2="1">
      <stop offset="0" stop-color="#ece2cd"/>
      <stop offset="1" stop-color="#ddd1b6"/>
    </linearGradient>
    <linearGradient id="flap" x1="0.15" y1="0" x2="0.35" y2="1">
      <stop offset="0" stop-color="#47553f"/>
      <stop offset="1" stop-color="#36412f"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="540" height="320" rx="14" fill="url(#body)" stroke="#3a4634" stroke-opacity="0.10"/>
  <polygon points="0,2 270,150 540,2 540,318 0,318" fill="url(#pocket)"/>
  <path d="M6 316 L270 196 L534 316" fill="none" stroke="#3a4634" stroke-opacity="0.10" stroke-width="1.5"/>
  <polygon points="0,0 540,0 270,204" fill="url(#flap)"/>
  <polygon points="0,0 540,0 270,204" fill="none" stroke="#2c3526" stroke-opacity="0.35" stroke-width="1"/>
</svg>`;

const envSrc = `data:image/svg+xml;base64,${Buffer.from(envelopeSvg).toString("base64")}`;

export function renderInviteImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundImage:
            "radial-gradient(circle at 50% 36%, #f7f2e7 0%, #f1ebdf 60%, #e7dfcd 100%)",
          fontFamily: "Cormorant Garamond",
        }}
      >
        {/* Double border, classic invitation frame */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            width: 1144,
            height: 574,
            border: "2px solid rgba(58,70,52,0.28)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 37,
            left: 37,
            width: 1126,
            height: 556,
            border: "1px solid rgba(58,70,52,0.16)",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            fontFamily: "Cormorant Garamond",
            fontWeight: 600,
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: greenSoft,
            marginBottom: 20,
          }}
        >
          You&apos;re Invited
        </div>

        {/* Sealed envelope (shown first on the site) */}
        <div style={{ position: "relative", display: "flex", width: 400, height: 237 }}>
          <img
            src={envSrc}
            alt=""
            width={400}
            height={237}
            style={{
              borderRadius: 14,
              boxShadow: "0 26px 50px rgba(58,70,52,0.22)",
            }}
          />
          {/* Wax seal sitting at the flap apex */}
          <div
            style={{
              position: "absolute",
              left: 164,
              top: 116,
              width: 71,
              height: 71,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: cream,
              fontFamily: "Great Vibes",
              fontSize: 32,
              backgroundImage:
                "radial-gradient(circle at 38% 30%, #55654b 0%, #34402e 70%)",
              border: "2px solid rgba(44,53,38,0.85)",
              boxShadow:
                "0 5px 12px rgba(0,0,0,0.3), inset 0 2px 5px rgba(255,255,255,0.18), inset 0 -3px 6px rgba(0,0,0,0.3)",
            }}
          >
            {INITIALS}
          </div>
        </div>

        {/* Names */}
        <div
          style={{
            fontFamily: "Great Vibes",
            fontSize: 84,
            lineHeight: 1.05,
            color: green,
            marginTop: 24,
          }}
        >
          {COUPLE}
        </div>

        {/* Ornamental divider */}
        <div style={{ display: "flex", alignItems: "center", marginTop: 10, marginBottom: 14 }}>
          <div style={{ width: 70, height: 1, backgroundColor: "rgba(107,117,99,0.55)" }} />
          <div style={{ fontSize: 22, margin: "0 12px", lineHeight: 1, color: greenSoft }}>·</div>
          <div style={{ width: 70, height: 1, backgroundColor: "rgba(107,117,99,0.55)" }} />
        </div>

        {/* Dates */}
        <div
          style={{
            fontFamily: "Cormorant Garamond",
            fontWeight: 600,
            fontSize: 30,
            letterSpacing: 5,
            color: green,
          }}
        >
          {DATE_LINE}
        </div>

        {/* The functions */}
        <div
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: 24,
            letterSpacing: 1,
            color: greenSoft,
            marginTop: 8,
          }}
        >
          {FUNCTIONS_LINE}
        </div>

        {/* City */}
        <div
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: 21,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: greenSoft,
            marginTop: 6,
            opacity: 0.85,
          }}
        >
          Lahore · Pakistan
        </div>
      </div>
    ),
    {
      width: OG_SIZE.width,
      height: OG_SIZE.height,
      fonts: [
        { name: "Great Vibes", data: greatVibes, weight: 400, style: "normal" },
        { name: "Cormorant Garamond", data: cormorant, weight: 400, style: "normal" },
        { name: "Cormorant Garamond", data: cormorantSemi, weight: 600, style: "normal" },
      ],
    },
  );
}
