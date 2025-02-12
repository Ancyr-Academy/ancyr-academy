"use client";

import React from "react";
import {
  IoBook,
  IoCash,
  IoFolderOpen,
  IoInfinite,
  IoPeople,
  IoPlayCircle,
  IoPodium,
  IoTime,
} from "react-icons/io5";
import styles from "./CleanArchitecturePage.module.scss";
import { Overview } from "../components/Overview";
import {
  buildingBlocks,
  Courses,
  SalesPage,
  SellingParagraph,
} from "../components/SalesPage";
import {
  cleanArchitectureBundles,
  cleanArchitectureCourses,
} from "../content/clean-architecture";

export const CleanArchitecturePage = () => {
  return (
    <main>
      <Overview
        title={"Les formations Clean Architecture en TDD"}
        subtitle={
          <>
            Développez des applications riches et complexes en
            <br />
            <b>pas à pas en Clean Architecture</b> et en <b>TDD</b> dans
            différents langages et différentes stacks.
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
        <SalesPage
          sections={[
            buildingBlocks.about(
              <SellingParagraph>
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
              </SellingParagraph>,
            ),
            buildingBlocks.content([
              "Mettre en place une Clean Architecture",
              "Développer votre application en TDD",
              "Tester votre application de bout en bout",
              "Ecrire des tests unitaires solide",
            ]),
            buildingBlocks.target([
              "Aux développeurs qui désirent développer des logiciels plus robustes avec une méthode qui a fait ses preuves",
              "Qui désirent développer des programmes de très haute qualité, flexible et réutilisables",
              "Qui veulent apprendre à tester leur application sous toutes ses coutûres",
              "Qui souhaitent améliorer leur compétence en matière de design orienté objet",
            ]),
            buildingBlocks.professor,
            buildingBlocks.reviews,
            buildingBlocks.bundles(
              <Courses courses={cleanArchitectureBundles} />,
            ),
            buildingBlocks.courses(
              <Courses courses={cleanArchitectureCourses} />,
            ),
            buildingBlocks.moneyback,
          ]}
        />
      </div>
    </main>
  );
};
