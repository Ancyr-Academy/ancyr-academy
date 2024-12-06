import React from "react";

type Status =
  | {
      type: "available";
      url: string;
    }
  | {
      type: "soon";
    }
  | {
      type: "unavailable";
    };

type Course = {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  status: Status;
  resume: React.ReactNode;
  isHot: boolean;
};

export const cleanArchitectureCourses: Course[] = [
  {
    id: "fondamentaux",
    imageUrl:
      "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/mBkKdN7QdaTOzbWXW9WF",
    price: 200,
    status: {
      type: "available",
      url: "https://courses.ancyracademy.fr/p/clean-architecture-fondamentaux",
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
  {
    id: "web-nextjs",
    imageUrl:
      "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/HQeGzGLBT3iMntw82WdE",
    price: 300,
    status: {
      type: "available",
      url: "https://courses.ancyracademy.fr/p/clean-architecture-nextjs",
    },
    title: "Web NextJS",
    resume: (
      <>
        Apprenez à développer une application front-end en{" "}
        <b>Clean Architecture</b> avec NextJS 13 en <b>TDD</b> avec une suite de
        tests unitaire qui couvre 100% du périmètre fonctionnel.
      </>
    ),
    isHot: true,
  },
  {
    id: "api-nestjs",
    imageUrl:
      "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/FI20zcQx6Wx1WweQUZmg",
    price: 300,
    status: {
      type: "available",
      url: "https://courses.ancyracademy.fr/p/clean-architecture-nestjs",
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
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/ca/formations/CleanSpring.png",
    price: 300,
    status: {
      type: "available",
      url: "https://courses.ancyracademy.fr/p/clean-architecture-api-spring-java",
    },
    title: "API Spring Java",
    resume: (
      <>
        Apprenez à développer une application back-end en{" "}
        <b>Clean Architecture / Domain-Driven Design</b> avec Spring Boot,
        développé en <b>TDD</b> et couvert de <b>tests d'intégrations</b> sur un
        projet complexe.
      </>
    ),
    isHot: false,
  },
  {
    id: "php-symfony",
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/ca/formations/CleanSymfony.png",
    price: 300,
    status: {
      type: "available",
      url: "https://courses.ancyracademy.fr/p/clean-architecture-api-symfony-php",
    },
    title: "API Symfony PHP",
    resume: (
      <>
        Apprenez à développer une application fullstack en{" "}
        <b>Clean Architecture / Domain-Driven Design</b> avec Symfony, développé
        en <b>TDD</b> et couvert de <b>tests d'intégrations</b> sur un projet
        complexe.
      </>
    ),
    isHot: true,
  },
  {
    id: "csharp-dotnet",
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/ca/formations/CleanNetCore.png",
    price: 300,
    status: {
      type: "soon",
    },
    title: "API .NET Core C#",
    resume: (
      <>
        Apprenez à développer une application back-end en{" "}
        <b>Clean Architecture / Domain-Driven Design</b> avec .NET Core en C#,
        développé en <b>TDD</b> et couvert de <b>tests d'intégrations</b> sur un
        projet complexe.
      </>
    ),
    isHot: false,
  },
  {
    id: "python-fastapi",
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/ca/formations/CleanFastAPI.png",
    price: 300,
    status: {
      type: "unavailable",
    },
    title: "API FastAPI Python",
    resume: (
      <>
        Apprenez à développer une application back-end en{" "}
        <b>Clean Architecture / Domain-Driven Design</b> avec FastAPI, développé
        en <b>TDD</b> et couvert de <b>tests d'intégrations</b> sur un projet
        complexe.
      </>
    ),
    isHot: false,
  },
];
