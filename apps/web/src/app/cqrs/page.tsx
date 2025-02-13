import React from "react";
import { CQRSPage } from "@ancyracademy/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CQRS - Ancyr Academy",
  description:
    "Formation Complète CQRS - 1h de cours intensifs avec exercices & explications claires pour apprendre et maitriser le Test-Driven Development",
  openGraph: {
    images: [
      {
        url: "https://cdn.filestackcontent.com/g3Yv0uBaQ2OYoY8hrnZH",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://cdn.filestackcontent.com/g3Yv0uBaQ2OYoY8hrnZH",
      },
    ],
  },
};

const Page = () => {
  return <CQRSPage />;
};

export default Page;
