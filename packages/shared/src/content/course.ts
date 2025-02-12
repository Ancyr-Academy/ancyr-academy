import React from "react";

type Status =
  | {
      type: "available";
      productId: string;
    }
  | {
      type: "soon";
    }
  | {
      type: "unavailable";
    };

export type CourseType = {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  status: Status;
  resume: React.ReactNode;
  isHot: boolean;
};
