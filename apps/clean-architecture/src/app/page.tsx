import React from "react";
import { CleanArchitecturePage } from "@ancyracademy/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation Clean Architecture complète et en ligne - Ancyr Academy",
  description:
    "Apprenez à créer des applications front-end et back-end en Clean Architecture et en TDD en NodeJS, React, PHP ou Java.",
  openGraph: {
    images: [
      {
        url: "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/ca/formations/clean_architecture_course.png",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/ca/formations/clean_architecture_course.png",
      },
    ],
  },
};

const Page = () => {
  return <CleanArchitecturePage />;
};

export default Page;
