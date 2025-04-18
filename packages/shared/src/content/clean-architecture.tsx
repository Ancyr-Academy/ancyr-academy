import React from "react";
import { CourseType } from "./course";

export const cleanArchitectureBundles: CourseType[] = [
  {
    id: "mega-bundle",
    imageUrl: "https://cdn.filestackcontent.com/x6worA6VR1OUspPAEDAR",
    price: 400,
    status: {
      type: "available",
      productId: "6102265",
    },
    title: "MegaBundle",
    resume: (
      <>
        Toutes les formations Clean Architecture disponibles (JavaScript, Java &
        PHP) <b>+ celles à venir (C#...)</b>
      </>
    ),
    isHot: true,
  },
  {
    id: "fullstack-javascript",
    imageUrl: "https://cdn.filestackcontent.com/PZZqfwieTQG0P1x1P0nb",
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
    imageUrl: "https://cdn.filestackcontent.com/MhBT57hnQsWQObusmAka",
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
    imageUrl: "https://cdn.filestackcontent.com/o0cQTbL3QUOCCnhbrXDk",
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
    imageUrl: "https://cdn.filestackcontent.com/7wUZmygxRyq5Q8XSTfiY",
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
    imageUrl: "https://cdn.filestackcontent.com/z1p8F1VnTFuqlVv1zJM2",
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
    imageUrl: "https://cdn.filestackcontent.com/2Sg9RQCR0DRk6inikTAQ",
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
