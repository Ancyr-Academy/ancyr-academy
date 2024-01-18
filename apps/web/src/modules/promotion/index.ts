export const salesDiscount = {
  startsAt: new Date("2024-01-17T00:00:00.000Z"),
  endsAt: new Date("2024-01-28T00:00:00.000Z"),
  percentage: 0.4,
  code: "JAN2024",
};

export const isDiscountActive = (date: Date = new Date()) => {
  return (
    date.getTime() >= salesDiscount.startsAt.getTime() &&
    date.getTime() <= salesDiscount.endsAt.getTime()
  );
};

export const secondsBeforeEndOfDiscount = (date: Date = new Date()) => {
  if (!isDiscountActive(date)) {
    return 0;
  }

  const now = new Date();
  const diff = salesDiscount.endsAt.getTime() - now.getTime();
  return Math.floor(diff / 1000);
};
