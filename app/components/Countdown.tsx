"use client";

import { useEffect, useState } from "react";
import { EVENTS } from "../wedding";

// Absolute start times, resolved once. Each is pinned to Pakistan time in
// wedding.ts, so this is correct no matter where the guest is reading from.
const STARTS = EVENTS.map((event) => new Date(event.startsAt).getTime());

function pad(n: number) {
  return String(n).padStart(2, "0");
}

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

type State = TimeLeft & {
  /** Which of the functions we are counting down to. */
  index: number;
  /** True once the last function has started. */
  over: boolean;
};

// Start on the first event at zero so the server-rendered markup matches the
// first client render, then update on the client once mounted (no hydration
// mismatch). From there the timer rolls forward to whichever function is next.
const INITIAL: State = { index: 0, days: 0, hours: 0, minutes: 0, seconds: 0, over: false };

export default function Countdown() {
  const [state, setState] = useState<State>(INITIAL);

  useEffect(() => {
    function tick() {
      const now = Date.now();
      const next = STARTS.findIndex((start) => start > now);
      if (next === -1) {
        setState({ index: STARTS.length - 1, days: 0, hours: 0, minutes: 0, seconds: 0, over: true });
        return;
      }
      const diff = STARTS[next] - now;
      setState({
        index: next,
        days: Math.floor(diff / 864e5),
        hours: Math.floor((diff % 864e5) / 36e5),
        minutes: Math.floor((diff % 36e5) / 6e4),
        seconds: Math.floor((diff % 6e4) / 1e3),
        over: false,
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const event = EVENTS[state.index];

  return (
    <section id="countdown">
      <div className="section-title">
        <h2>Countdown</h2>
        <p>To the most special days of our lives</p>
      </div>
      <div className="cd-next">
        {state.over ? "The celebrations have begun" : `Next · ${event.ordinal}`}
      </div>
      <div className="countdown">
        <div className="cd-box">
          <div className="num">{pad(state.days)}</div>
          <div className="lbl">Days</div>
        </div>
        <div className="cd-box">
          <div className="num">{pad(state.hours)}</div>
          <div className="lbl">Hours</div>
        </div>
        <div className="cd-box">
          <div className="num">{pad(state.minutes)}</div>
          <div className="lbl">Minutes</div>
        </div>
        <div className="cd-box">
          <div className="num">{pad(state.seconds)}</div>
          <div className="lbl">Seconds</div>
        </div>
      </div>
      <p className="cd-when">
        {event.name} · {event.weekday}, {event.dateLabel} · {event.time}
      </p>
    </section>
  );
}
