import React from "react";
import clamp from "../util/clamp";

export interface CountdownComponents {
  days: boolean;
  hours: boolean;
  minutes: boolean;
  seconds: boolean;
}

interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// you can use any style here, i personally like "font-mono text-2xl"!
function Countdown({
  to,
  hideDays,
  children,
}: {
  to: Date;
  hideDays: boolean;
  children?: React.ReactNode;
}) {
  // DD:HH:MM:SS

  const [countdown, setCountdown] = React.useState<CountdownResult>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [completed, setCompleted] = React.useState(false);

  React.useEffect(() => {
    const updateCountdown = () => {
      let now = new Date();
      let diff = to.getTime() - now.getTime();
      if (diff < 0) {
        diff = 0;
      }
      if (diff === 0 && completed === false) {
        setCompleted(true);
      }
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
      setCountdown({
        days: clamp(days, 0, 99),
        hours: clamp(hours, 0, 99),
        minutes: clamp(minutes, 0, 99),
        seconds: clamp(seconds, 0, 99),
      });
    };
    updateCountdown();
    let interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [to, hideDays, completed]);

  if (completed && children) {
    return <>{children}</>;
  }

  if (hideDays) {
    return (
      <span className="countdown font-mono">
        <span
          style={{ "--value": countdown.hours } as React.CSSProperties}
        ></span>
        h
        <span
          style={{ "--value": countdown.minutes } as React.CSSProperties}
        ></span>
        m
        <span
          style={{ "--value": countdown.seconds } as React.CSSProperties}
        ></span>
        s
      </span>
    );
  } else {
    return (
      <span className="countdown font-mono">
        <span
          style={{ "--value": countdown.days } as React.CSSProperties}
        ></span>
        d
        <span
          style={{ "--value": countdown.hours } as React.CSSProperties}
        ></span>
        h
        <span
          style={{ "--value": countdown.minutes } as React.CSSProperties}
        ></span>
        m
        <span
          style={{ "--value": countdown.seconds } as React.CSSProperties}
        ></span>
        s
      </span>
    );
  }
}

Countdown.defaultProps = {
  hideDays: false,
};

export default Countdown;
