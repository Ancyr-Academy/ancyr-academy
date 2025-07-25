import React from "react";
import { TestDrivenDevelopmentPage } from "@ancyracademy/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test-Driven Development - Ancyr Academy",
  description:
    "Formation Complète TDD - 7h de cours intensifs avec exercices & explications claires pour apprendre et maitriser le Test-Driven Development",
  openGraph: {
    images: [
      {
        url: "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_tdd.png",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_tdd.png",
      },
    ],
  },
};

const Page = () => {
  return <TestDrivenDevelopmentPage />;
};

export default Page;
