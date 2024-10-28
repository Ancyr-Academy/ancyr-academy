const totalSlots = 11;
const discountStates = [
  {
    percentage: 0.4,
    code: "CLEAN20",
    slots: [0, 1],
  },
  {
    percentage: 0.5,
    code: "CLEAN30",
    slots: [3, 4],
  },
  {
    percentage: 0.3,
    code: "CLEAN20",
    slots: [6, 7],
  },
  {
    percentage: 0.5,
    code: "CLEAN40",
    slots: [9, 10],
  },
] as const;

export const promotional = {
  totalSlots,
  discountStates,
};
