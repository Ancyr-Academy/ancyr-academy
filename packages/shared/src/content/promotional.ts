type ExceptionalDiscount = {
  startsAt: Date;
  endsAt: Date;
  percentage: number;
  code: string;
};

const totalSlots = 8;
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
] as const;

let exceptionalDiscount: ExceptionalDiscount | null = null;

export const promotional = {
  totalSlots,
  discountStates,
  exceptionalDiscount,
};
