import { useRef, useEffect } from "react";

export function useInterval(callback: () => void | Promise<void>, delay: number, runImmediately = false) {
  const savedCallback = useRef<() => void | Promise<void>>();

  useEffect(() => {
    savedCallback.current = callback;
    if (runImmediately && typeof callback === "function") {
      callback();
    }
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (typeof savedCallback.current === "function") {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
