const totalSlots = 11;
const discountStates = [
  {
    percentage: 0.1,
    code: "CLEAN10",
    slots: [0, 1],
  },
  {
    percentage: 0.2,
    code: "CLEAN20",
    slots: [3, 4],
  },
  {
    percentage: 0.1,
    code: "CLEAN10",
    slots: [6, 7],
  },
  {
    percentage: 0.3,
    code: "CLEAN30",
    slots: [9, 10],
  },
] as const;

export const promotional = {
  totalSlots,
  discountStates,
};
