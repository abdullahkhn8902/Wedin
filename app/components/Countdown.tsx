"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-12T17:00:00").getTime();

function pad(n: number) {
  return String(n).padStart(2, "0");
}

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

const ZERO: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export default function Countdown() {
  // Start at zero so the server-rendered markup matches the first client render,
  // then update on the client once mounted (avoids hydration mismatch).
  const [time, setTime] = useState<TimeLeft>(ZERO);

  useEffect(() => {
    function tick() {
      let diff = TARGET - Date.now();
      if (diff < 0) diff = 0;
      setTime({
        days: Math.floor(diff / 864e5),
        hours: Math.floor((diff % 864e5) / 36e5),
        minutes: Math.floor((diff % 36e5) / 6e4),
        seconds: Math.floor((diff % 6e4) / 1e3),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="countdown">
      <div className="section-title">
        <h2>Countdown</h2>
        <p>To the most special day of our lives</p>
      </div>
      <div className="countdown">
        <div className="cd-box">
          <div className="num">{pad(time.days)}</div>
          <div className="lbl">Days</div>
        </div>
        <div className="cd-box">
          <div className="num">{pad(time.hours)}</div>
          <div className="lbl">Hours</div>
        </div>
        <div className="cd-box">
          <div className="num">{pad(time.minutes)}</div>
          <div className="lbl">Minutes</div>
        </div>
        <div className="cd-box">
          <div className="num">{pad(time.seconds)}</div>
          <div className="lbl">Seconds</div>
        </div>
      </div>
    </section>
  );
}
