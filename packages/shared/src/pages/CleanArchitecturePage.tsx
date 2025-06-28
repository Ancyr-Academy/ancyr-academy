"use client";

import React from "react";
import { coursePoints, Overview } from "../components/Overview";
import {
  buildingBlocks,
  Courses,
  SalesPage,
  SellingParagraph,
} from "../components/SalesPage";
import { cleanArchitectureBundles } from "../content/clean-architecture";

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
        points={coursePoints({ hours: 30 })}
      />
      <SalesPage
        sections={[
          buildingBlocks.about(
            <SellingParagraph>
              On sait que la Clean Architecture peut paraître intidimante. Rien
              n'est plus faux. Dans cette formation, vous apprendrez à
              développer des applications back-end et front-end en Clean
              Architecture avec des exemples simples et concrets. En prime, vous
              apprendrez comment la Clean Architecture vous permet d'avoir une
              application testable, et comment guider le développement de votre
              application par les tests avec le Test-Driven Development (TDD).
            </SellingParagraph>,
          ),
          buildingBlocks.outcomes([
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
          buildingBlocks.moneyback,
        ]}
      />
    </main>
  );
};
