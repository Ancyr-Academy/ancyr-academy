import React from "react";
import { CleanArchitecturePage } from "@ancyracademy/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apprendre la Clean Architecture et le TDD - Ancyr Academy",
  description:
    "Apprenez à créer des applications front-end et back-end en Clean Architecture et en TDD en NodeJS, React, PHP ou Java.",
  openGraph: {
    images: [
      {
        url: "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_ca.png",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_ca.png",
      },
    ],
  },
};

const Page = () => {
  return <CleanArchitecturePage />;
};

export default Page;
