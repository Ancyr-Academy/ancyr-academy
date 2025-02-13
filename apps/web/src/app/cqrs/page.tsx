import React from "react";
import { CQRSPage } from "@ancyracademy/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CQRS - Ancyr Academy",
  description:
    "Formation Complète CQRS - 1h de cours intensifs avec exercices & explications claires pour apprendre et maitriser le Test-Driven Development",
};

const Page = () => {
  return <CQRSPage />;
};

export default Page;
