"use client";

import React from "react";
import { Overview, workshopPoints } from "../components/Overview";
import {
  buildingBlocks,
  PracticalInformations,
  SalesPage,
  SellingParagraph,
  WorkshopProgram,
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
        button={{
          title: "Réserver maintenant",
          href: "#reserve",
        }}
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
              Ce Workshop est divisé en{" "}
              <b>7 demi-journées étalées sur 7 semaines</b> pour avoir le temps
              de digérer ce que vous allez apprendre. Vous aurez des devoirs à
              faire chaque semaine et aurez accès à un canal privilégié pour me
              poser vos questions.
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
          buildingBlocks.plan(
            <WorkshopProgram
              elements={[
                {
                  title: "Jour 1",
                  points: [
                    "Tour de table & présentation",
                    "Introduction au Domain-Driven Design et au besoin qu'il vient résoudre",
                    "Introduction au Fil rouge du Workshop",
                    "Analyse du Problème : Domains, Subdomains, UseCases, Analyse de Noms, Analyse de Verbes",
                    "Questions / Réponses",
                    "Devoirs",
                  ],
                },
                {
                  title: "Jour 2",
                  points: [
                    "Corrigé des devoirs",
                    "Découverte du Solution Space et du Design Stratégique",
                    "Introduction au Model-Driven Development",
                    "Concepts : Bounded Contexts, Context Mapping, Intégration et Subdomains",
                    "Atelier : Bounded Contexts & Mapping du Fil rouge",
                    "Questions / Réponses",
                    "Devoirs",
                  ],
                },
                {
                  title: "Jour 3",
                  points: [
                    "Corrigé des devoirs",
                    "Introduction au paradigme orienté objet",
                    "Découverte du Design Tactique",
                    "Concepts : Aggregates, Entités, Value Objects, Domain Events, Repositories & Domain Services",
                    "Mini-fil rouge pour expérimenter les patterns tactiques",
                    "Atelier : développement d'une mini-application en appliquant les patterns",
                    "Questions / Réponses",
                    "Devoirs",
                  ],
                },
                {
                  title: "Jour 4",
                  points: [
                    "Corrigé des devoirs",
                    "Patterns Architecturaux du Domain-Driven Design",
                    "Introduction à la Clean Architecture",
                    "Développement de l'application du fil rouge avec un premier Bounded Context",
                    "Questions / Réponses",
                    "Devoirs",
                  ],
                },
                {
                  title: "Jour 5",
                  points: [
                    "Corrigé des devoirs",
                    "Développement d'autres Bounded Contexts en Intégration",
                    "Application de patterns complexes",
                    "Questions / Réponses",
                    "Devoirs",
                  ],
                },
                {
                  title: "Jour 6",
                  points: [
                    "Corrigé des devoirs",
                    "Introduction à l'Event-Driven Programming",
                    "Introduction à l'Eventual Consistency et au patterns évènementiels",
                    "Développement d'un Bounded Context en évènementiel",
                    "Tester un système évènementiel",
                    "Questions / Réponses",
                    "Devoirs",
                  ],
                },
                {
                  title: "Jour 7",
                  points: [
                    "Corrigé des devoirs",
                    "Récapitulatif de ce qu'on a appris",
                    "Notions pour aller plus loin (CQRS, Long Running Process, Sagas, Event-Sourcing, Modular Monoliths)",
                    "Questions / Réponses",
                  ],
                },
              ]}
            />,
          ),
          buildingBlocks.professor,
          buildingBlocks.reviews,
          buildingBlocks.reserve(
            <PracticalInformations
              dates={"Du 29 Avril au 10 Juin 2024"}
              hours={"De 9h à 12h30"}
              requirements={[
                "2 ans d'expérience en développement logiciel, préférablement back-end",
                "Être à l'aise avec une stack NodeJS, mais vous pouvez choisir la stack qui vous plait",
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
