"use client";

import { useEffect, useState } from "react";
import { Duration } from "./lib/duration";

export const useCountdown = (endsAt: Date, now: Date = new Date()) => {
  function compute(endsAt: Date, now: Date = new Date()) {
    return Math.max(0, Math.floor((endsAt.getTime() - now.getTime()) / 1000));
  }

  const [seconds, setSeconds] = useState(compute(endsAt, now));

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(compute(endsAt, new Date()));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setSeconds]);

  return new Duration(seconds);
};
