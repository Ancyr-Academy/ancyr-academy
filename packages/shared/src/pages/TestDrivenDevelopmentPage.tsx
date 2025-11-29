"use client";

import React from "react";
import { coursePoints, Overview } from "../components/Overview";
import {
  buildingBlocks,
  Courses,
  SalesPage,
  SellingParagraph,
} from "../components/SalesPage";

export const TestDrivenDevelopmentPage = () => {
  return (
    <main>
      <Overview
        title={"Test-Driven Development"}
        subtitle={
          <>
            Découvrez comment <b>guider votre développement</b> pas à pas avec
            des tests.
            <br />
            <b>Maitrisez le design</b> de vos applications.
          </>
        }
        points={coursePoints({ hours: 7 })}
      />
      <SalesPage
        sections={[
          buildingBlocks.about(
            <SellingParagraph>
              Cette formation vise à vous enseigner le Test-Driven Development,
              c'est-à-dire le développement piloté par les tests, afin de vous
              aider à décomposer une application complexe en sous-problèmes plus
              simples et à aborder cette complexité petit à petit.
              <br />
              <br />
              Avec une dizaine d'exercices de difficulté croissantes, vous allez
              apprendre à créer des design en partant d'une feuille blanche
              jusqu'à développer un vrai petit logiciel utilisable.
            </SellingParagraph>,
          ),
          buildingBlocks.outcomes([
            "Ce qu'est réellement le Test-Driven Development",
            "Comment le TDD vous aide à maitriser le design de vos applications",
            "Mettre en pratique le TDD sur des projets réels non triviaux",
            "Comment aborder des problèmes complexes en les décomposant en sous-problèmes plus simples",
            "Organiser ses tests et correctement choisir le code à tester",
            "Découvrir comment la Clean Architecture se révèle naturellement quand on fait du TDD",
            "Différencier l'école Classic du TDD de l'école Mockist",
            "Comment le TDD permet de recouvrir naturellement votre code de tests qui vous protègent contre les régressions",
          ]),
          buildingBlocks.target([
            "Aux développeurs qui veulent structurer leur façon de développer",
            "Qui veulent avoir un filet de sécurité qui leur permette de travailler sans introduire de régressions",
            "Qui désirent avoir un véritable outil de design de design de solutions complexes et évolutives",
            "Qui veulent maitriser le TDD dans ses détails les plus fins",
          ]),
          buildingBlocks.professor,
          buildingBlocks.reviews,
          buildingBlocks.courses(
            <Courses
              courses={[
                {
                  id: "6530092",
                  imageUrl:
                    "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_tdd.png",
                  isHot: true,
                  price: 150,
                  status: {
                    type: "available",
                    productId: "6102280",
                  },
                  title: "Test-Driven Development",
                  resume: (
                    <>
                      Apprenez à développer des applications riches & complexes
                      en étant véritablement guidés par les tests.
                    </>
                  ),
                },
              ]}
            />,
          ),
          buildingBlocks.moneyback,
        ]}
      />
    </main>
  );
};
