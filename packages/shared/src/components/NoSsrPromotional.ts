"use client";

import dynamic from "next/dynamic";

export const NoSsrPromotional = dynamic(
  () => import("../components/Promotional").then((c) => c.Promotional),
  {
    ssr: false,
  },
);
