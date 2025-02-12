import React from "react";
import { CourseType } from "./course";

export const cleanArchitectureBundles: CourseType[] = [
  {
    id: "mega-bundle",
    imageUrl: "https://cdn.filestackcontent.com/GRpxyomeR4iUNCauuZFu",
    price: 400,
    status: {
      type: "available",
      productId: "6102265",
      url: "https://courses.ancyracademy.fr/purchase?product_id=6102265",
    },
    title: "MegaBundle",
    resume: (
      <>
        Toutes les formations Clean Architecture disponibles (JavaScript & Java){" "}
        <b>+ celles à venir</b>
      </>
    ),
    isHot: true,
  },
  {
    id: "fullstack-javascript",
    imageUrl: "https://cdn.filestackcontent.com/SStck28YTRS73B1Ys9ls",
    price: 250,
    status: {
      type: "available",
      productId: "6102269",
      url: "https://courses.ancyracademy.fr/purchase?product_id=6102269",
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
    imageUrl: "https://cdn.filestackcontent.com/2wspVDc5TaKYbLO11hIl",
    price: 150,
    status: {
      type: "available",
      productId: "6102275",
      url: "https://courses.ancyracademy.fr/purchase?product_id=6102275",
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
    imageUrl: "https://cdn.filestackcontent.com/wqaw6PHfTKCXbdbhws9C",
    price: 150,
    status: {
      type: "available",
      productId: "6102950",
      url: "https://courses.ancyracademy.fr/purchase?product_id=6102950",
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
    id: "fondamentaux",
    imageUrl:
      "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/mBkKdN7QdaTOzbWXW9WF",
    price: 30,
    status: {
      type: "available",
      url: "https://courses.ancyracademy.fr/purchase?product_id=6102264",
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
  {
    id: "web-nextjs",
    imageUrl:
      "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/HQeGzGLBT3iMntw82WdE",
    price: 150,
    status: {
      type: "available",
      url: "https://courses.ancyracademy.fr/purchase?product_id=6102276",
      productId: "6102276",
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
    price: 150,
    status: {
      type: "available",
      url: "https://courses.ancyracademy.fr/purchase?product_id=6102277",
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
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/ca/formations/CleanSpring.png",
    price: 150,
    status: {
      type: "available",
      url: "https://courses.ancyracademy.fr/purchase?product_id=6102279",
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
    isHot: false,
  },
  {
    id: "php-symfony",
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/ca/formations/CleanSymfony.png",
    price: 150,
    status: {
      type: "available",
      url: "https://courses.ancyracademy.fr/purchase?product_id=6102282",
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
    id: "csharp-dotnet",
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/ca/formations/CleanNetCore.png",
    price: 150,
    status: {
      type: "soon",
    },
    title: "API .NET Core C#",
    resume: (
      <>
        Apprenez à développer une application back-end en{" "}
        <b>Clean Architecture</b> avec .NET Core en C#, développé en <b>TDD</b>{" "}
        et couvert de <b>tests d'intégrations</b> sur un projet complexe.
      </>
    ),
    isHot: false,
  },
  {
    id: "python-fastapi",
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/ca/formations/CleanFastAPI.png",
    price: 150,
    status: {
      type: "unavailable",
    },
    title: "API FastAPI Python",
    resume: (
      <>
        Apprenez à développer une application back-end en{" "}
        <b>Clean Architecture </b> avec FastAPI, développé en <b>TDD</b> et
        couvert de <b>tests d'intégrations</b> sur un projet complexe.
      </>
    ),
    isHot: false,
  },
];
