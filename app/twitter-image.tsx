import { renderInviteImage, OG_ALT } from "./_og/invite-image";

// Read the bundled fonts/photo from disk -> needs the Node.js runtime.
export const runtime = "nodejs";

export const alt = OG_ALT;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return renderInviteImage();
}
