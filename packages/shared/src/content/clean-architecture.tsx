import React from "react";
import { CourseType } from "./course";

export const cleanArchitectureBundles: CourseType[] = [
  {
    id: "mega-bundle",
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_ca_megabundle.png",
    price: 400,
    status: {
      type: "available",
      productId: "6102265",
    },
    title: "MegaBundle",
    resume: (
      <>
        Toutes les formations Clean Architecture disponibles (JavaScript, Java &
        PHP) en un seul bundle.
      </>
    ),
    isHot: true,
  },
  {
    id: "fullstack-javascript",
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_ca_javascript.png",
    price: 250,
    status: {
      type: "available",
      productId: "6102269",
    },
    title: "Fullstack JavaScript",
    resume: (
      <>
        Contient les 3 formations "Clean Architecture Fondamentaux", "Clean
        Architecture API NestJS" & "Clean Architecture Frontend React/Next.js"
      </>
    ),
    isHot: false,
  },
  {
    id: "react-nextjs",
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_ca_bundle_frontend_nextjs.png",
    price: 150,
    status: {
      type: "available",
      productId: "6220209",
    },
    title: "React NextJS",
    resume: (
      <>
        Contient les 2 formations "Clean Architecture Fondamentaux" & "Clean
        Architecture Frontend React/Next.js"
      </>
    ),
    isHot: false,
  },
  {
    id: "backend-nestjs",
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_ca_bundle_backend_nestjs.png",
    price: 150,
    status: {
      type: "available",
      productId: "6220223",
    },
    title: "Backend API NestJS",
    resume: (
      <>
        Contient les 3 formations "Clean Architecture Fondamentaux" & "Clean
        Architecture API NestJS"
      </>
    ),
    isHot: false,
  },
  {
    id: "java",
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_ca_bundle_java.png",
    price: 150,
    status: {
      type: "available",
      productId: "6102275",
    },
    title: "Java",
    resume: (
      <>
        Contient les 2 formations "Clean Architecture Fondamentaux" et "Clean
        Architecture Java/Spring"
      </>
    ),
    isHot: false,
  },
  {
    id: "php",
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_ca_bundle_php.png",
    price: 150,
    status: {
      type: "available",
      productId: "6102950",
    },
    title: "PHP",
    resume: (
      <>
        Contient les 2 formations "Clean Architecture Fondamentaux" et "Clean
        Architecture PHP / Symfony"
      </>
    ),
    isHot: false,
  },
  {
    id: "fondamentaux",
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_ca_fondamentaux.png",
    price: 30,
    status: {
      type: "available",
      productId: "6102264",
    },
    title: "Fondamentaux",
    resume: (
      <>
        Apprenez la théorie derrière la Clean Architecture en étudiant les
        concepts de principes SOLID, d’injection de dépendance et des patterns
        de la Clean Architecture.
      </>
    ),
    isHot: false,
  },
];
