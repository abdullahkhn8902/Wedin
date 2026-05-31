"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Background music for the invitation.
 *
 * Playback starts when the envelope is opened — the click that opens the card
 * counts as the user gesture browsers require before audio may autoplay, so we
 * listen for the "invitation:open" event the envelope dispatches. A small green
 * mic button then floats over the page and lets the guest mute / unmute.
 */
export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    function onOpen() {
      const audio = audioRef.current;
      if (!audio) return;
      audio.volume = 0.35;
      setRevealed(true);
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          // Autoplay was blocked — the button still lets the guest start it.
          setPlaying(false);
        });
    }
    window.addEventListener("invitation:open", onOpen);
    return () => window.removeEventListener("invitation:open", onOpen);
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.volume = 0.35;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />
      {revealed && (
        <button
          type="button"
          className={`music-toggle ${playing ? "is-playing" : "is-muted"}`}
          onClick={toggle}
          aria-label={playing ? "Mute background music" : "Play background music"}
          aria-pressed={playing}
          title={playing ? "Mute music" : "Play music"}
        >
          {playing ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
