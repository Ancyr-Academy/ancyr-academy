export const getSalesDiscount = () => ({
  startsAt: new Date("2024-02-22T00:00:00.000Z"),
  endsAt: new Date("2024-02-27T00:00:00.000Z"),
  percentage: 0.4,
  code: "CLEAN40",
});

export const isDiscountActive = (date: Date = new Date()) => {
  return (
    date.getTime() >= getSalesDiscount().startsAt.getTime() &&
    date.getTime() <= getSalesDiscount().endsAt.getTime()
  );
};

export const secondsBeforeEndOfDiscount = (date: Date = new Date()) => {
  if (!isDiscountActive(date)) {
    return 0;
  }

  const now = new Date();
  const diff = getSalesDiscount().endsAt.getTime() - now.getTime();
  return Math.floor(diff / 1000);
};
