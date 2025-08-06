import React from "react";
import { WorkshopDDDPage } from "@ancyracademy/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop Domain-Driven Design - Ancyr Academy",
  description:
    "Apprendre le Domain-Driven Design en profondeur avec 7 demi-journées de Workshop pratiques et intensives.",
  openGraph: {
    images: [
      {
        url: "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_workshop_ddd.png",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_workshop_ddd.png",
      },
    ],
  },
};

const Page = () => {
  return <WorkshopDDDPage />;
};

export default Page;
