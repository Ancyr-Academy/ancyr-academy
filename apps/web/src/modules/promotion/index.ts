export const getSalesDiscount = () => ({
  startsAt: new Date("2024-03-05T00:00:00.000Z"),
  endsAt: new Date("2024-03-10T00:00:00.000Z"),
  percentage: 0.3,
  code: "CLEAN30",
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
