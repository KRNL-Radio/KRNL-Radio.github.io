import React from "react";
import clamp from "../util/clamp";

export interface CountupComponents {
  days: boolean;
  hours: boolean;
  minutes: boolean;
  seconds: boolean;
}

interface CountupResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// you can use any style here, i personally like "font-mono text-2xl"!
function Countup({
  from,
  hideDays,
  pause,
  forceZero,
}: {
  from: Date;
  hideDays: boolean;
  pause: boolean;
  forceZero: boolean;
  children?: React.ReactNode;
}) {
  // DD:HH:MM:SS

  const [countup, setCountup] = React.useState<CountupResult>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const updateCountup = () => {
      if (pause) return;
      if (forceZero) {
        setCountup({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      let now = new Date();
      let diff = now.getTime() - from.getTime();
      let days = 0;
      if (hideDays === false) {
        days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -= days * (1000 * 60 * 60 * 24);
      }
      let hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      let minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);
      let seconds = Math.floor(diff / 1000);
      setCountup({
        days: clamp(days, 0, 99),
        hours: clamp(hours, 0, 99),
        minutes: clamp(minutes, 0, 99),
        seconds: clamp(seconds, 0, 99),
      });
    };
    updateCountup();
    let interval = setInterval(updateCountup, 1000);
    return () => clearInterval(interval);
  }, [from, hideDays, pause, forceZero]);

  if (hideDays) {
    return (
      <span className="countdown font-mono">
        <span
          style={{ "--value": countup.hours } as React.CSSProperties}
        ></span>
        h
        <span
          style={{ "--value": countup.minutes } as React.CSSProperties}
        ></span>
        m
        <span
          style={{ "--value": countup.seconds } as React.CSSProperties}
        ></span>
        s
      </span>
    );
  } else {
    return (
      <span className="countdown font-mono">
        <span style={{ "--value": countup.days } as React.CSSProperties}></span>
        d
        <span
          style={{ "--value": countup.hours } as React.CSSProperties}
        ></span>
        h
        <span
          style={{ "--value": countup.minutes } as React.CSSProperties}
        ></span>
        m
        <span
          style={{ "--value": countup.seconds } as React.CSSProperties}
        ></span>
        s
      </span>
    );
  }
}

Countup.defaultProps = {
  hideDays: false,
  pause: false,
  forceZero: false,
};

export default Countup;
