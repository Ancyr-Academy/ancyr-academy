type ExceptionalDiscount = {
  startsAt: Date;
  endsAt: Date;
  percentage: number;
  code: string;
};

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

let exceptionalDiscount: ExceptionalDiscount | null = {
  startsAt: new Date("2025-01-27T00:00:00.000Z"),
  endsAt: new Date("2024-01-31T00:00:00.000Z"),
  percentage: 0.4,
  code: "NOUVELAN2025",
};

export const promotional = {
  totalSlots,
  discountStates,
  exceptionalDiscount,
};
