import React from "react";

type Status = {
  type: "available";
  productId: string;
};

export type CourseType = {
  id: string;
  imageUrl: string;
  price: number;
  upcomingPrice?: number;
  title: string;
  status: Status;
  resume: React.ReactNode;
  previewUrl?: string;
  isHot: boolean;
};
