import sharp from "sharp";
import { renderInviteImage } from "../_og/invite-image";

/**
 * The social-share card, served at a real `/og.jpg` URL.
 *
 * Chat apps — WhatsApp above all — are fussy about `og:image`. They reliably
 * render the LARGE, full-width preview card (image on top, title and text
 * underneath) only when the image is an ordinary landscape JPEG/PNG at a URL
 * that looks like a plain image file. Next's `opengraph-image.tsx` convention
 * serves an extension-less PNG (`/opengraph-image?<hash>`), which WhatsApp
 * tends to demote to the small square-thumbnail card. So instead:
 *
 *   - route segment named `og.jpg`  -> the URL literally ends in `.jpg`
 *   - Satori PNG re-encoded as JPEG -> ~45 KB, far under WhatsApp's ~300 KB cap
 *   - `force-static`                -> baked at build time, served off the CDN
 *
 * The artwork itself still comes from the shared renderer, so it stays derived
 * from `wedding.ts` — names and dates are only ever edited in one place.
 */

// sharp + reading the bundled fonts from disk -> Node.js runtime, and no
// per-request work, so prerender it once at build time.
export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  const png = await renderInviteImage().arrayBuffer();

  const jpeg = await sharp(Buffer.from(png))
    // 4:4:4 keeps the thin hairline borders and script lettering from smearing.
    .jpeg({ quality: 84, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toBuffer();

  return new Response(new Uint8Array(jpeg), {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
