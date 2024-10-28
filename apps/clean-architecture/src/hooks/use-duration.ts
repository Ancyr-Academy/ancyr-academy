import { Duration } from "@/domain/duration";
import { endOfDay } from "date-fns";
import { useEffect, useState } from "react";
import { secondsBeforeEndOfPromotion } from "../domain/promotion";

export const useDuration = () => {
  const [seconds, setSeconds] = useState(secondsBeforeEndOfPromotion());

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(secondsBeforeEndOfPromotion());
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return new Duration(seconds);
};
