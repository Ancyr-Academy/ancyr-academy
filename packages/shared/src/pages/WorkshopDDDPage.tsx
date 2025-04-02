"use client";

import React from "react";
import { Overview, workshopPoints } from "../components/Overview";
import {
  buildingBlocks,
  PracticalInformations,
  SalesPage,
  SellingParagraph,
} from "../components/SalesPage";

export const WorkshopDDDPage = () => {
  return (
    <main>
      <Overview
        pretitle={"Workshop Long"}
        title={"Domain-Driven Design"}
        subtitle={
          <>
            Maitrisez la complexité de votre logiciel avec le{" "}
            <b>Domain-Driven Design</b>, la <b>Clean Architecture</b> et le{" "}
            <b>développement orienté objet</b>
          </>
        }
        points={workshopPoints({ hours: 24 })}
      />
      <SalesPage
        sections={[
          buildingBlocks.about(
            <SellingParagraph>
              Ce Workshop vise à vous enseigner le Domain-Driven Design, une
              méthodologie dont le but est de partager le même langage et la
              même vision du métier entre les développeurs et les experts
              métier.
              <br />
              <br />
              Ce Workshop divisé en{" "}
              <b>7 demi-journées étalées sur 7 semaines</b> a pour objectif de
              vous enseigner les sujets les plus importants du DDD en vous
              laissant suffisamment de temps pour digérer toute la richesse de
              cette méthodologie.
            </SellingParagraph>,
          ),
          buildingBlocks.content([
            "Ce qu'est le Domain-Driven Design et quand l'utiliser",
            "Les outils pour comprendre le métier et le modéliser",
            "La notion de Langage Ubiquitaire et de Domain Modeling",
            "Les concepts de Subdomains et leur différenciation",
            "Les patterns stratégiques, notamment les Bounded Contexts et le Context Mapping",
            "Les patterns tactiques, dont les Aggregates et les Domain Events",
            "Comment implémenter le DDD dans son code",
            "Intégrer plusieurs Bounded Contexts indépendants",
          ]),
          buildingBlocks.target([
            "Aux développeurs qui veulent comprendre le DDD en profondeur",
            "Qui souhaitent se familiariser avec le développement objet",
            "Qui veulent apprendre à décomposer un très gros projet en Bounded Contexts",
          ]),
          buildingBlocks.professor,
          buildingBlocks.reviews,
          buildingBlocks.practicalInfo(
            <PracticalInformations
              dates={"Du 29 Avril au 10 Juin 2024"}
              hours={"De 9h à 12h30"}
              requirements={[
                "2 ans d'expérience en développement logiciel",
                "Rudiments de la Clean Architecture",
              ]}
              location={"A distance, sur Zoom"}
              price={1500}
            />,
          ),
          buildingBlocks.moneyback,
        ]}
      />
    </main>
  );
};
