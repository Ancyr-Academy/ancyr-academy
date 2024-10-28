const totalSlots = 8;
const discountStates = [
  {
    percentage: 0.4,
    code: "CLEAN40",
    slots: [0, 1],
  },
  {
    percentage: 0.5,
    code: "CLEAN50",
    slots: [2, 3],
  },
  {
    percentage: 0.3,
    code: "CLEAN30",
    slots: [4, 5],
  },
  {
    percentage: 0.5,
    code: "CLEAN50",
    slots: [6, 7],
  },
] as const;

export const promotional = {
  totalSlots,
  discountStates,
};
