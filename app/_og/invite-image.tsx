/* eslint-disable @next/next/no-img-element -- these render inside Satori (next/og), not the DOM */
import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Shared renderer for the social-share (Open Graph / Twitter) preview image.
 *
 * It is generated at request/build time with `next/og` (Satori) so it always
 * matches the invitation: the real couple photo (`public/hero.png`) sits behind
 * an elegant typographic overlay using the same fonts as the site.
 *
 * Used by both `app/opengraph-image.tsx` and `app/twitter-image.tsx`.
 */

const FONT_DIR = join(process.cwd(), "assets", "fonts");

const greatVibes = readFileSync(join(FONT_DIR, "GreatVibes-Regular.ttf"));
const cormorant = readFileSync(join(FONT_DIR, "CormorantGaramond-Regular.ttf"));
const cormorantSemi = readFileSync(join(FONT_DIR, "CormorantGaramond-SemiBold.ttf"));
const arefRuqaa = readFileSync(join(FONT_DIR, "ArefRuqaa-Regular.ttf"));

// Embed the hero photo as a data URI so the renderer never needs a network hop.
const heroBase64 = readFileSync(join(process.cwd(), "public", "hero.png")).toString("base64");
const heroSrc = `data:image/png;base64,${heroBase64}`;

// The Qur'anic ayah is pre-shaped to a transparent PNG (Satori cannot do Arabic
// contextual joining); see scripts/render-ayah note in assets/ayah.png.
const ayahBase64 = readFileSync(join(process.cwd(), "assets", "ayah.png")).toString("base64");
const ayahSrc = `data:image/png;base64,${ayahBase64}`;

export const OG_SIZE = { width: 1200, height: 630 };

export const OG_ALT =
  "Sobia & Suleman — Wedding Invitation. Friday, September 4, 2026 at Topaz Event Complex, Lahore.";

const cream = "#f1ebdf";

export function renderInviteImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          fontFamily: "Cormorant Garamond",
        }}
      >
        {/* Couple photo background */}
        <img
          src={heroSrc}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            objectFit: "cover",
          }}
        />

        {/* Deep-green wash for legibility, darker top & bottom */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            backgroundImage:
              "linear-gradient(180deg, rgba(33,42,29,0.66) 0%, rgba(33,42,29,0.30) 34%, rgba(33,42,29,0.42) 64%, rgba(33,42,29,0.88) 100%)",
          }}
        />

        {/* Double border, classic invitation frame */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            width: 1144,
            height: 574,
            border: "2px solid rgba(241,235,223,0.7)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 37,
            left: 37,
            width: 1126,
            height: 556,
            border: "1px solid rgba(241,235,223,0.38)",
          }}
        />

        {/* Centered content */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 1200,
            height: 630,
            padding: "0 90px",
            textAlign: "center",
            color: cream,
          }}
        >
          {/* Qur'anic ayah — "And We created you in pairs" (78:8) */}
          <img
            src={ayahSrc}
            alt="And We created you in pairs"
            width={428}
            height={160}
            style={{ objectFit: "contain", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.55))" }}
          />

          {/* Ornamental divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 18,
              marginBottom: 6,
            }}
          >
            <div style={{ width: 80, height: 1, backgroundColor: "rgba(241,235,223,0.6)" }} />
            <div style={{ fontSize: 26, margin: "0 14px", lineHeight: 1 }}>·</div>
            <div style={{ width: 80, height: 1, backgroundColor: "rgba(241,235,223,0.6)" }} />
          </div>

          {/* Names */}
          <div
            style={{
              fontFamily: "Great Vibes",
              fontSize: 132,
              lineHeight: 1.05,
              textShadow: "0 4px 22px rgba(0,0,0,0.5)",
            }}
          >
            Sobia &amp; Suleman
          </div>

          <div
            style={{
              fontFamily: "Cormorant Garamond",
              fontWeight: 600,
              fontSize: 32,
              letterSpacing: 5,
              marginTop: 18,
              textShadow: "0 2px 10px rgba(0,0,0,0.55)",
            }}
          >
            FRIDAY · SEPTEMBER 4, 2026
          </div>

          <div
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: 25,
              letterSpacing: 1,
              marginTop: 10,
              opacity: 0.92,
              textShadow: "0 2px 10px rgba(0,0,0,0.55)",
            }}
          >
            Topaz Event Complex · Lahore
          </div>
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
        { name: "Aref Ruqaa", data: arefRuqaa, weight: 400, style: "normal" },
      ],
    },
  );
}
