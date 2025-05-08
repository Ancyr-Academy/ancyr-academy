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
    code: "CODE10",
    slots: [0, 1],
  },
  {
    percentage: 0.15,
    code: "CODE15",
    slots: [3, 4],
  },
  {
    percentage: 0.1,
    code: "CODE10",
    slots: [6, 7],
  },
] as const;

const exceptionalDiscount: ExceptionalDiscount | null = {
  startsAt: new Date("2025-05-08T00:00:00Z"),
  endsAt: new Date("2025-05-09T00:00:00Z"),
  percentage: 0.3,
  code: "VICTOIRE30",
};

export const promotional: {
  totalSlots: number;
  discountStates: typeof discountStates;
  exceptionalDiscount: ExceptionalDiscount | null;
} = {
  totalSlots,
  discountStates,
  exceptionalDiscount,
} as const;
