"use client";

import React from "react";
import {
  IoBook,
  IoCash,
  IoFolderOpen,
  IoInfinite,
  IoPaperPlane,
  IoPeople,
  IoPerson,
  IoPlayCircle,
  IoPodium,
  IoReader,
  IoStar,
  IoTime,
} from "react-icons/io5";
import styles from "./CleanArchitecturePage.module.scss";
import { Overview } from "../components/Overview";
import { Professor, SellingList, SellingPage } from "../components/SellingPage";
import { useCurrentDiscount } from "../discount-hooks";
import { CourseList } from "../components/CourseList";
import { Course } from "../components/Course";
import { cleanArchitectureCourses } from "../content/clean-architecture";
import { CompleteReviewList } from "../components/ReviewList";

export const CleanArchitecturePage = () => {
  return (
    <main>
      <Overview
        title={"Les formations Clean Architecture en TDD"}
        subtitle={
          <>
            Développez des applications riches et complexes en
            <br />
            <b>pas à pas en Clean Architecture</b> et en <b>TDD</b>.
          </>
        }
        points={[
          {
            Icon: IoPodium,
            text: "Débutants à Experts",
          },
          {
            Icon: IoBook,
            text: "Théorie & Pratique",
          },
          {
            Icon: IoFolderOpen,
            text: "4 Formations",
          },
          {
            Icon: IoPlayCircle,
            text: "30 heures de vidéo HD",
          },
          {
            Icon: IoPeople,
            text: "Aide de la communauté",
          },
          {
            Icon: IoInfinite,
            text: "Accès à vie",
          },
          {
            Icon: IoTime,
            text: "Apprenez à votre rythme",
          },
          {
            Icon: IoCash,
            text: "Satisfait ou Remboursé",
          },
        ]}
      />
      <div className={styles.content_body}>
        <SellingPage
          sections={[
            {
              id: "about",
              icon: IoBook,
              menuTitle: "A propos",
              subtitle: "Conçu avec grand soin",
              title: "A propos du cours",
              content: (
                <p>
                  La formation Clean Architecture en PHP & Symfony a été conçu
                  pour vous aider à développer des applications robustes et
                  scalables qui durent dans le temps.
                  <br /> Ce cours vise à vous faire passer de novice à
                  professionnel et à être capable de mettre votre savoir en
                  pratique immédiatement.
                  <br />
                  <br />
                  Apprendre la Clean Architecture, ça peut paraître intimidant.
                  Rassurez-vous, cette formation va droit au but et se concentre
                  intégralement sur la pratique. Elle est accessible à tout
                  développeur ayant un minimum d’expérience en développement
                  logiciel.
                </p>
              ),
            },
            {
              id: "material",
              icon: IoReader,
              menuTitle: "Contenu",
              subtitle: "La théorie et la pratique",
              title: "Ce que vous allez apprendre",
              content: (
                <SellingList
                  elements={[
                    "Mettre en place une Clean Architecture",
                    "Développer votre application en TDD",
                    "Tester votre application de bout en bout",
                    "Ecrire des tests unitaires solide",
                  ]}
                />
              ),
            },
            {
              id: "target",
              icon: IoPeople,
              menuTitle: "Cible",
              subtitle: "Cible visée",
              title: "A qui s'adresse ce cours ?",
              content: (
                <SellingList
                  elements={[
                    "Aux développeurs qui désirent développer des logiciels plus robustes avec une méthode qui a fait ses preuves",
                    "Qui désirent développer des programmes de très haute qualité, flexible et réutilisables",
                    "Qui veulent apprendre à tester leur application sous toutes ses coutûres",
                    "Qui souhaitent améliorer leur compétence en matière de design orienté objet",
                  ]}
                />
              ),
            },
            {
              id: "professor",
              icon: IoPerson,
              menuTitle: "Instructeur",
              subtitle: "Instructeur",
              title: "Qui enseigne ce cours ?",
              content: <Professor />,
            },
            {
              id: "reviews",
              icon: IoStar,
              menuTitle: "Avis",
              subtitle: "Ils en parlent mieux que nous",
              title: "Qu'en disent les élèves ?",
              content: <CompleteReviewList />,
            },
            {
              id: "bundles",
              icon: IoFolderOpen,
              menuTitle: "Bundles",
              subtitle: "Ils sont souvent achetés ensemble",
              title: "Bundles",
              content: <Bundles />,
            },
            {
              id: "courses",
              icon: IoPaperPlane,
              menuTitle: "Cours",
              subtitle: "Conçus sur mesure",
              title: "Cours",
              content: <Courses />,
            },
          ]}
        />
      </div>
    </main>
  );
};

const Bundles = () => {
  const discount = useCurrentDiscount();

  return (
    <CourseList>
      <Course
        imageUrl="https://cdn.filestackcontent.com/GRpxyomeR4iUNCauuZFu"
        isHot
        price={400}
        status={{
          type: "available",
          productId: "6102265",
        }}
        title="MegaBundle"
        discount={discount}
      >
        Toutes les formations Clean Architecture disponibles (JavaScript & Java){" "}
        <b>+ celles à venir</b>
      </Course>
      <Course
        imageUrl="https://cdn.filestackcontent.com/SStck28YTRS73B1Ys9ls"
        price={250}
        status={{
          type: "available",
          productId: "6102269",
        }}
        title="Fullstack JavaScript"
        discount={discount}
      >
        Contient les 3 formations "Clean Architecture Fondamentaux", "Clean
        Architecture API NestJS" & "Clean Architecture Frontend React/Next.js"
      </Course>

      <Course
        imageUrl="https://cdn.filestackcontent.com/2wspVDc5TaKYbLO11hIl"
        price={150}
        status={{
          type: "available",
          productId: "6102275",
        }}
        title="Java"
        discount={discount}
      >
        Contient les 2 formations "Clean Architecture Fondamentaux" et "Clean
        Architecture Java/Spring"
      </Course>
      <Course
        imageUrl="https://cdn.filestackcontent.com/wqaw6PHfTKCXbdbhws9C"
        price={150}
        status={{
          type: "available",
          productId: "6102950",
        }}
        title="PHP"
        discount={discount}
      >
        Contient les 2 formations "Clean Architecture Fondamentaux" et "Clean
        Architecture PHP / Symfony"
      </Course>
    </CourseList>
  );
};

const Courses = () => {
  const discount = useCurrentDiscount();

  return (
    <CourseList>
      {cleanArchitectureCourses.map((course) => (
        <Course
          imageUrl={course.imageUrl}
          isHot={course.isHot}
          key={course.id}
          price={course.price}
          status={course.status}
          title={course.title}
          discount={discount}
        >
          {course.resume}
        </Course>
      ))}
    </CourseList>
  );
};
