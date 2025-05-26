"use client";

import React from "react";
import { InlineWidget } from "react-calendly";
import { Overview, workshopPoints } from "../components/Overview";
import {
  buildingBlocks,
  PracticalInformations,
  SalesPage,
  SellingParagraph,
  WorkshopProgram,
} from "../components/SalesPage";
import { Container } from "../components/Container";

export const WorkshopDDDPage = () => {
  return (
    <main>
      <Overview
        pretitle={"Workshop"}
        title={"Domain-Driven Design"}
        subtitle={
          <>
            Maitrisez la complexité de votre logiciel avec le{" "}
            <b>Domain-Driven Design</b> et apprenez comment le mettre en oeuvre
            dans vos propres produits.
          </>
        }
        points={workshopPoints({ hours: 24 })}
      />
      <div style={{ marginBottom: 80 }}>
        <Container>
          <InlineWidget
            url="https://calendly.com/ancyr-academy/ddd"
            pageSettings={{
              backgroundColor: "101818",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              hideGdprBanner: true,
              primaryColor: "5AE0CC",
              textColor: "FFFFFF",
            }}
          />
        </Container>
      </div>
      <SalesPage
        sections={[
          buildingBlocks.about(
            <SellingParagraph>
              <b>
                90% de la valeur de votre produit réside dans 10% de son code.
              </b>
              <br />
              <br />
              Et vous avez tout intérêt à faire en sorte que ce code là soit
              rodé, facile à maintenir et à faire évoluer.
              <br />
              <br />
              Si vous avez déjà un peu d'expérience, vous savez que c'est
              rarement le cas.
              <br />
              <br />
              Le Domain-Driven Design est précisément né pour{" "}
              <b>recentrer le développement sur ces 10% de code là</b>, de
              savoir identifier ces 10%, et de permettre aux développeurs
              d'enrichir leur produit avec des fonctionnalités toujours plus
              complexes et utiles à leur client.
              <br />
              <br />
              <b>
                Et ça, ça ne s'apprend ni dans les livres, ni dans des tutos, ni
                en 2 jours de formation.
              </b>
              <br />
              <br />
              Ça s'apprend en pratiquant sur des projets réels de plus en plus
              complexes, sur plusieurs semaines, avec un feedback sur son
              travail.
              <br />
              <br />
              Ce Workshop de 7 sessions, c'est justement l'occasion de se jeter
              dans le bain. De plonger au coeur du DDD et du développement
              orienté objet, d'expérimenter avec d'autres participants, de
              découvrir des ressources et d'obtenir les clés pour approfondir
              tous les concepts du DDD.
              <br />
              <br />
              Comment savoir quelle partie du produit a le plus de valeur ?
              <br />
              Comment modéliser un problème complexe avec un code clair ?<br />
              Comment tester mon produit ?<br />
              Comment gérer les transactions ?<br />
              <br />
              <b>Les réponses en 7 sessions.</b>
            </SellingParagraph>,
          ),
          buildingBlocks.outcomes([
            "Définir le Domain-Driven Design et l'implémenter dans vos projets",
            "Initier vos collègues au Domain-Driven Design",
            "Développer en DDD sans commettre les erreurs les plus fréquentes",
            "Mieux développer en véritable Programmation Orientée Objet",
            "Décomposer votre application en Bounded Contexts",
            "Développer des monolithes aussi performants que des microservices",
            "Concevoir des solutions poussées à des problèmes très avancés",
            "Avoir les outils pour explorer des patterns très avancés (Microservices, Event Sourcing, CQRS...)",
          ]),
          /** Replace this by "what do you acquire" **/
          buildingBlocks.target([
            "Aux développeurs qui veulent comprendre le DDD en profondeur",
            "Qui veulent une approche hands-on & pratique du DDD, pas seulement théorique",
            "Qui veulent développer des compétences d'architecte logiciel avancés",
            "Qui veulent mettre en pratique le DDD dans leurs projets",
            "Qui sont prêts à travailler entre les sessions pour pratiquer les exercices guidés (entre 2h et 4h par semaine)",
          ]),
          buildingBlocks.plan(
            <WorkshopProgram
              elements={[
                {
                  title: "Session 1 - Introduction",
                  points: [
                    "Tour de table & présentation",
                    "Introduction au Domain-Driven Design",
                    "Initiation à l'analyse du Problem Space",
                    "Domains & Subdomains : comment les identifier ?",
                    "Où faire du DDD pour maximiser son profit",
                    "Questions / Réponses",
                    "Devoirs technique",
                  ],
                },
                {
                  title: "Session 2 - Vraie Programmation Orienté Objet",
                  points: [
                    "Corrigé des devoirs",
                    "Introduction au Domain Modeling et à la véritable POO",
                    "Mise à mort des idées reçues sur la POO",
                    "Découverte des Domain Objects",
                    "Introduction aux Value Objects",
                    "Introduction à l'Architecture Logicielle en DDD",
                    "Atelier de Domain Modeling",
                    "Questions / Réponses",
                    "Devoirs technique",
                  ],
                },
                {
                  title: "Session 3 - Patterns Entity & Policy",
                  points: [
                    "Corrigé des devoirs",
                    "Introduction aux Entités / Repositories",
                    "Introduction aux Design Patterns (Policy & Template Method)",
                    "Discussion : Template Method vs Strategy",
                    "Discussion : Domain Model Trilemma (CAP du Domain Modeling)",
                    "Etude d'un cas complexe qui justifie l'utilisation de patterns",
                    "Atelier : application du Policy sur un exercice évolutif tiré de la vie réelle",
                    "Questions / Réponses",
                    "Devoirs qui mettra à l'épreuve vos compétences de design (très exigeant)",
                  ],
                },
                {
                  title: "Session 4 - Aggregates (1/2)",
                  points: [
                    "Corrigé des devoirs",
                    "Introduction : Aggregates, Invariants & Concurrence",
                    "Clarification du concept avec des exemples réels",
                    "Atelier : design d'Aggregates avec les erreurs que je vois très souvent",
                    "Atelier : développement d'un cas complexe avec des Aggregates",
                    "Questions / Réponses",
                    "Devoirs sur le design d'Aggregate",
                  ],
                },
                {
                  title: "Session 5 - Aggregates (2/2)",
                  points: [
                    "Corrigé des devoirs",
                    "Introduction : Les 4 règles des Aggregates",
                    "Discussion : patterns de concurrence & de transactions",
                    "Discussion : Optimistic vs Pessimistic Lock",
                    "Introduction : Domain Events & Eventual Consistency",
                    "Devoirs sur le design d'Aggregate",
                  ],
                },
                {
                  title: "Session 6 - Bounded Contexts",
                  points: [
                    "Corrigé des devoirs",
                    "Introduction : Bounded Context, Context Mapping & Integration",
                    "Introduction : l'aspect socio-technique du DDD (très récent, cutting-edge)",
                    "Revisite complète et intensive des Bounded Contexts",
                    "Discussion : Integrations de Bounded Contexts",
                    "Atelier : étude de cas de Bounded Contexts",
                    "Atelier : découpage de Bounded Contexts",
                    "Questions / Réponses",
                    "Devoirs sur le découpage en BCs et l'intégration entre BCs",
                  ],
                },
                {
                  title: "Session 7 - Conclusions",
                  points: [
                    "Corrigé des devoirs",
                    "Sujet : Comment persister nos Domain Objects ?",
                    "Sujet : SQL vs NoSQL",
                    "Sujets Libres",
                    "Pistes à explorer pour aller plus loin",
                    "Questions / Réponses",
                    "Suggestions de Devoirs (que je corrigerai avec plaisir)",
                  ],
                },
              ]}
            />,
          ),
          buildingBlocks.professor,
          buildingBlocks.reviews,
          buildingBlocks.workshopMoneyback,
          buildingBlocks.reserve(
            <PracticalInformations
              dates={[
                "Du Jeudi 26 Juin au Jeudi 07 Août 2025",
                "Ou bien du Mardi 05 Août au Mardi 16 Septembre 2025",
              ]}
              hours={"De 9h à 12h30"}
              requirements={[
                "2 ans d'expérience en développement logiciel",
                "Être à l'aise avec une stack NodeJS, mais vous pouvez choisir la stack qui vous plait (Java, C#, PHP...)",
                "Bonnes compétences de développement orienté objet",
              ]}
              location={"A distance, sur Zoom"}
              price={1500}
            />,
          ),
        ]}
      />

      <div style={{ marginBlock: 80 }}>
        <Container>
          <InlineWidget
            url="https://calendly.com/ancyr-academy/ddd"
            pageSettings={{
              backgroundColor: "101818",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              hideGdprBanner: true,
              primaryColor: "5AE0CC",
              textColor: "FFFFFF",
            }}
          />
        </Container>
      </div>
    </main>
  );
};
