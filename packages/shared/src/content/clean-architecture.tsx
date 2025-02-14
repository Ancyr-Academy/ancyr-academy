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
];

export const cleanArchitectureCourses: CourseType[] = [
  {
    id: "api-nestjs",
    imageUrl: "https://cdn.filestackcontent.com/GkTtmhfCTumJB3PPJOOf",
    price: 150,
    status: {
      type: "available",
      productId: "6102277",
    },
    title: "API NestJS",
    resume: (
      <>
        Apprenez à développer une application back-end en Clean Architecture
        avec le framework NestJS en TDD et avec une suite de tests
        d'intégrations complète, ainsi que quelques notions de Domain-Driven
        Design.
      </>
    ),
    isHot: true,
  },
  {
    id: "spring-java",
    imageUrl: "https://cdn.filestackcontent.com/EqQkFeG0RhKMJiLNiU6z",
    price: 150,
    status: {
      type: "available",
      productId: "6102279",
    },
    title: "API Spring Java",
    resume: (
      <>
        Apprenez à développer une application back-end en{" "}
        <b>Clean Architecture</b> avec Spring Boot, développé en <b>TDD</b> et
        couvert de <b>tests d'intégrations</b> sur un projet complexe.
      </>
    ),
    isHot: true,
  },
  {
    id: "php-symfony",
    imageUrl: "https://cdn.filestackcontent.com/tvNNVBQiidgkYkNtf9dA",
    price: 150,
    status: {
      type: "available",
      productId: "6102282",
    },
    title: "API Symfony PHP",
    resume: (
      <>
        Apprenez à développer une application fullstack en{" "}
        <b>Clean Architecture</b> avec Symfony, développé en <b>TDD</b> et
        couvert de <b>tests d'intégrations</b> sur un projet complexe.
      </>
    ),
    isHot: true,
  },

  {
    id: "web-nextjs",
    imageUrl: "https://cdn.filestackcontent.com/GLY9BpMGSvqiY7xRWSpy",
    price: 150,
    status: {
      type: "available",
      productId: "6102276",
    },
    title: "Front NextJS",
    resume: (
      <>
        Apprenez à développer une application front-end en{" "}
        <b>Clean Architecture</b> avec NextJS 13 en <b>TDD</b> avec une suite de
        tests unitaire qui couvre 100% du périmètre fonctionnel.
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
  // {
  //   id: "csharp-dotnet",
  //   imageUrl:
  //     "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/ca/formations/CleanNetCore.png",
  //   price: 150,
  //   status: {
  //     type: "soon",
  //   },
  //   title: "API .NET Core C#",
  //   resume: (
  //     <>
  //       Apprenez à développer une application back-end en{" "}
  //       <b>Clean Architecture</b> avec .NET Core en C#, développé en <b>TDD</b>{" "}
  //       et couvert de <b>tests d'intégrations</b> sur un projet complexe.
  //     </>
  //   ),
  //   isHot: false,
  // },
  // {
  //   id: "python-fastapi",
  //   imageUrl:
  //     "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/ca/formations/CleanFastAPI.png",
  //   price: 150,
  //   status: {
  //     type: "unavailable",
  //   },
  //   title: "API FastAPI Python",
  //   resume: (
  //     <>
  //       Apprenez à développer une application back-end en{" "}
  //       <b>Clean Architecture </b> avec FastAPI, développé en <b>TDD</b> et
  //       couvert de <b>tests d'intégrations</b> sur un projet complexe.
  //     </>
  //   ),
  //   isHot: false,
  // },
];
