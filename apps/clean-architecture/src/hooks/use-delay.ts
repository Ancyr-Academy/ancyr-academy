import { Duration } from "@/domain/duration";
import { endOfDay } from "date-fns";
import { useEffect, useState } from "react";
import { secondsBeforeEndOfPromotion } from "../domain/promotion";

export const useDelay = () => {
  const [seconds, setSeconds] = useState(secondsBeforeEndOfPromotion());

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(secondsBeforeEndOfPromotion());
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return new Duration(seconds).toString();
};

export const useIsPromotionActive = () => {
  const [seconds, setSeconds] = useState(secondsBeforeEndOfPromotion());

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(secondsBeforeEndOfPromotion());
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return seconds > 0;
}