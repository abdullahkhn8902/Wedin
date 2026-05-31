"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "closed" | "opening" | "leaving" | "gone";

export default function EnvelopeIntro() {
  const [phase, setPhase] = useState<Phase>("closed");
  const timers = useRef<number[]>([]);

  // Lock background scroll while the intro is on screen.
  useEffect(() => {
    if (phase !== "gone") {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [phase]);

  // Clean up pending timers if the component unmounts mid-animation.
  useEffect(() => {
    const pending = timers.current;
    return () => {
      pending.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  // Let keyboard / assistive-tech users skip the overlay with Escape.
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setPhase("gone");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function handleOpen() {
    if (phase !== "closed") return;
    // Kick off the background music. Dispatching here keeps us inside the click
    // gesture, which is what browsers require before audio is allowed to play.
    window.dispatchEvent(new Event("invitation:open"));
    // Respect reduced-motion: skip the animation and reveal the page at once.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setPhase("gone");
      return;
    }
    setPhase("opening");
    // Sequence: flap opens + card rises -> overlay fades away -> unmount.
    timers.current.push(window.setTimeout(() => setPhase("leaving"), 1600));
    timers.current.push(window.setTimeout(() => setPhase("gone"), 2400));
  }

  if (phase === "gone") return null;

  return (
    <div
      className={`intro-overlay ${phase}`}
      role="dialog"
      aria-modal="true"
      aria-label="Wedding invitation"
    >
      <div className="envelope-scene">
        <button
          type="button"
          className="envelope"
          onClick={handleOpen}
          aria-label="Open the wedding invitation. Press Escape to skip."
          autoFocus
        >
          <div className="env-body" />

          <div className="env-card">
            <div className="env-card-inner">
              <p className="ec-ayah" lang="ar" dir="rtl">
                وَخَلَقْنَاكُمْ أَزْوَاجًا
              </p>
              <p className="ec-top">You&apos;re Invited</p>
              <p className="ec-names">Sobia &amp; Suleman</p>
              <span className="ec-rule" />
              <p className="ec-date">04 · 09 · 2026</p>
            </div>
          </div>

          <div className="env-pocket" />
          <div className="env-flap" />
          <div className="env-seal">
            <span>S&amp;S</span>
          </div>

          <span className="tap-hint" aria-hidden="true">
            <span className="tap-ripple" />
            <span className="tap-hand">👆</span>
          </span>
        </button>

        <p className="env-hint">Tap to open your invitation</p>
      </div>
    </div>
  );
}
