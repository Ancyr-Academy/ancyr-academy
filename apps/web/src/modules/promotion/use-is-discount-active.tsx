import { useEffect, useState } from "react";
import { Duration } from "./duration";
import { secondsBeforeEndOfDiscount } from "./index";

export const useIsDiscountActive = () => {
  const [seconds, setSeconds] = useState(secondsBeforeEndOfDiscount());

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(secondsBeforeEndOfDiscount());
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return seconds > 0;
};
