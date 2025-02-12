import React from "react";
import { CleanArchitecturePage } from "@ancyracademy/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clean Architecture - Ancyr Academy",
  description:
    "Formation Complète Clean Architecture en TDD - 30h de cours intensifs avec exercices & explications claires pour apprendre et maitriser la Clean Architecture en TDD",
};

const Page = () => {
  return <CleanArchitecturePage />;
};

export default Page;
