import React from "react";
import { WorkshopDDDPage } from "@ancyracademy/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop Domain-Driven Design - Ancyr Academy",
  description:
    "Formation Domain-Driven Design - Apprendre le Domain-Driven Design, mettre en oeuvre le Domain-Driven Design et appliquer les concepts avancés du Domain-Driven Design",
  openGraph: {
    images: [
      {
        url: "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/workshops/w_ddd.png",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/workshops/w_ddd.png",
      },
    ],
  },
};

const Page = () => {
  return <WorkshopDDDPage />;
};

export default Page;
