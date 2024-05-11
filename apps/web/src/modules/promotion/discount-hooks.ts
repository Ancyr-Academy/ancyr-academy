import { addDays, startOfDay, subDays } from "date-fns";
import { useEffect, useState } from "react";
import { Duration } from "./duration";

type Discount = {
  startsAt: Date;
  endsAt: Date;
  percentage: number;
  code: string;
};

const daysIntoYear = (date: Date) => {
  return (
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
    24 /
    60 /
    60 /
    1000
  );
};

const totalSlots = 8;
const discountStates = [
  {
    percentage: 0.3,
    code: "CLEAN30",
    slots: [0, 1],
  },
  {
    percentage: 0.5,
    code: "CLEAN50",
    slots: [2, 3],
  },
  {
    percentage: 0.4,
    code: "CLEAN40",
    slots: [4, 5],
  },
  {
    percentage: 0.6,
    code: "CLEAN60",
    slots: [6, 7],
  },
] as const;

export const useCurrentDiscount = (now = new Date()): Discount | null => {
  // Note : this implementation is simplified since we have no way to know when it's gonna be recomputed
  // A more robust solution would be to use an interval to recompute the discount once the day change
  // But that should only occur if the user is visiting the website around midnight.

  const slot = (daysIntoYear(now) + 1) % totalSlots;

  const discount = discountStates.find(
    (d) => slot >= d.slots[0] && slot <= d.slots[1],
  );

  if (!discount) {
    return null;
  }

  const daysToRemove = slot - discount.slots[0];
  const startDate = startOfDay(subDays(now, daysToRemove));

  const daysToAdd = discount.slots[1] - discount.slots[0] + 1;
  const endDate = startOfDay(addDays(startDate, daysToAdd));

  if (endDate.getTime() < now.getTime()) {
    return null;
  }

  return {
    startsAt: startDate,
    endsAt: endDate,
    percentage: discount.percentage,
    code: discount.code,
  };
};

export const useDiscountDuration = () => {
  function compute(discount: Discount, now: Date = new Date()) {
    return Math.max(
      0,
      Math.floor((discount.endsAt.getTime() - now.getTime()) / 1000),
    );
  }

  const discount = useCurrentDiscount();
  const [seconds, setSeconds] = useState(discount ? compute(discount) : 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(discount ? compute(discount) : 0);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [discount, setSeconds]);

  return {
    duration: new Duration(seconds),
    discount,
  };
};
