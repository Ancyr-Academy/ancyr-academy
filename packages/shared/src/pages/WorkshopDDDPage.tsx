"use client";

import React from "react";
import { InlineWidget } from "react-calendly";
import { Overview, workshopPoints } from "../components/Overview";
import {
  buildingBlocks,
  FrequentlyAskedQuestions,
  PracticalInformations,
  SalesPage,
  SellingParagraph,
  WorkshopProgram,
} from "../components/SalesPage";
import { Container } from "../components/Container";
import { Button } from "../components/Button";

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
              A travers ce Workshop, vous allez apprendre en profondeur le
              Domain-Driven Design, un concept qui vise à partager le même
              langage et la même vision du métier entre tous les acteurs du
              projet (Devs, Product Owners, Business...).
              <br />
              <br />
              Ce Workshop est divisé en{" "}
              <b>7 demi-journées étalées sur 7 semaines</b> vous donne le temps
              d'intégrer les concepts avancés du Domain-Driven Design et de les
              mettre en application dans des exercices à difficulté croissante.
              <br />
              <br />
              Chaque session est composée{" "}
              <b>
                d'ateliers pratiques, d'études de cas et d'échanges oraux
              </b>{" "}
              pour vraiment prendre le sujet en main avec des exemples concrets.
              <br />
              <br />
              <b>
                Vous repartez avec une expérience pratique du Domain-Driven
                Design.
              </b>
            </SellingParagraph>,
          ),
          buildingBlocks.outcomes([
            "Définir le Domain-Driven Design et l'implémenter dans vos projets",
            "Initier vos collègues au Domain-Driven Design",
            "Mettre en place un design qui épouse véritablement les principes Orienté Objet",
            "Décomposer votre application en sous applications (Bounded Contexts)",
            "Concevoir des solutions poussées à des problèmes très complexes",
            "Avoir les outils pour explorer des patterns très avancés (Microservices, Event Sourcing, CQRS...)",
          ]),
          /** Replace this by "what do you acquire" **/
          buildingBlocks.target([
            "Aux développeurs qui veulent comprendre le DDD en profondeur",
            "Aux managers",
            "Aux tech leads",
            "Aux architectes logiciels",
          ]),
          buildingBlocks.plan(
            <WorkshopProgram
              elements={[
                {
                  title: "Session 1 - Introduction",
                  points: [
                    "Tour de table & présentation",
                    "Introduction au Domain-Driven Design",
                    "Autoévaluation de vos connaissances",
                    "Notions : Domain-Driven Design, Langage Ubiquitaire, Subdomains",
                    "Atelier : Identification des Subdomains",
                    "Questions / Réponses",
                    "Devoirs technique",
                  ],
                },
                {
                  title: "Session 2 - Design Orienté Objet",
                  points: [
                    "Corrigé des devoirs",
                    "Notions : Design orienté objet, Domain Modeling, Domain Objects, Domain Services",
                    "Notions : Architecture Logicielle en Domain-Driven Design",
                    "Atelier : Modélisation d'un cas réel avec des Domain Objects",
                    "Questions / Réponses",
                    "Devoirs technique",
                  ],
                },
                {
                  title: "Session 3 - Patterns Entity, Policy & Repository",
                  points: [
                    "Corrigé des devoirs",
                    "Notions : Entity, Policy, Repository",
                    "Atelier : Template Method vs Strategy",
                    "Atelier : Domain Model Trilemma (CAP du Domain Modeling)",
                    "Atelier : application du Policy sur un exercice évolutif tiré de la vie réelle",
                    "Questions / Réponses",
                    "Devoirs qui mettra à l'épreuve vos compétences de design (très exigeant)",
                  ],
                },
                {
                  title: "Session 4 - Aggregates (1/3)",
                  points: [
                    "Corrigé des devoirs",
                    "Notions : Aggregates, Invariance et Concurrence",
                    "Atelier : Etude de cas",
                    "Atelier : modéliser un Aggregate",
                    "Questions / Réponses",
                    "Devoirs sur le design d'Aggregate",
                  ],
                },
                {
                  title: "Session 5 - Aggregates (2/3)",
                  points: [
                    "Corrigé des devoirs",
                    "Notion : les 3 règles des Aggregates",
                    "Notion : Concurrence, Transactions & Locks",
                    "Atalier : design d'Aggregates avancé",
                    "Questions / Réponses",
                    "Devoirs sur le design d'Aggregate",
                  ],
                },
                {
                  title: "Session 6 - Aggregates (3/3)",
                  points: [
                    "Corrigé des devoirs",
                    "Notions : Domain Events, Eventual Consistency & Outbox Pattern",
                    "Notions : La 4e règle des Aggregates",
                    "Atelier : patterns de transaction",
                    "Atelier : Aggregates en Eventual Consistency",
                    "Questions / Réponses",
                    "Devoirs sur l'Eventual Consistency",
                  ],
                },
                {
                  title: "Session 7 - Bounded Contexts",
                  points: [
                    "Corrigé des devoirs",
                    "Notions : Bounded Context, Integration des Bounded Contexts",
                    "Notions : Communication synchrone ou asynchrone entre Bounded Contexts",
                    "Pistes à explorer pour aller plus loin",
                    "Conclusions et réflexions finales",
                    "Autoévaluation de vos connaissances",
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
              dates={["Les Mardis du 05 Août au 16 Septembre 2025"]}
              requirements={[
                "2 ans d'expérience en développement logiciel",
                "Être à l'aise avec une stack NodeJS, mais vous pouvez choisir la stack qui vous plait (Java, C#, PHP...)",
                "Bonnes compétences de développement orienté objet",
              ]}
            />,
          ),
          buildingBlocks.faq(
            <FrequentlyAskedQuestions
              questions={[
                {
                  title: "Pourquoi suivre ce Workshop ?",
                  answer: (
                    <>
                      Parce que le workshop est interactif, hands-on et explore
                      tous les principes avec une{" "}
                      <b>profondeur difficile à trouver sur Internet.</b>
                      <br />
                      <br />
                      Et je vous parle en connaissance de cause : j'ai analysé
                      toutes les formations de toutes les plateformes en France
                      et à l'International, et je me suis également formé auprès
                      d'acteurs reconnus dans la sphère du DDD.
                      <br />
                      <br />
                      Je connais les points forts et les points faibles de
                      chacune d'entre-elles, et j'en ai distillé le meilleur
                      dans ce Workshop.
                      <br />
                      <br />
                      Ma garantie ? En cas de déception,{" "}
                      <b>
                        vous pouvez me demander un remboursement intégral
                        jusqu'à la fin de la 2e session.
                      </b>
                      <br />
                      <br />
                      Personne ne me l'a demandé.
                    </>
                  ),
                },
                {
                  title: "Comment se déroule le Workshop ?",
                  answer: (
                    <>
                      Chaque session, c'est près de 4h de Workshop avec des
                      ateliers de développement interactif, des sessions de
                      questions / réponses et des devoirs qui devraient vous
                      prendre entre 2 et 4 heures par semaine, peut-être plus
                      selon votre niveau.
                      <br /> Je reste à votre disposition pendant la semaine
                      pour répondre à vos questions.
                    </>
                  ),
                },
                {
                  title: "Combien de temps dure le Workshop ?",
                  answer: (
                    <>
                      Environ 24 heures étalées sur 7 semaines ainsi qu'environ
                      4h de travaux personnels par semaine pour un total
                      d'environ 52 heures d'accompagnement.
                    </>
                  ),
                },
                {
                  title: "Combien de places sont disponibles ?",
                  answer: (
                    <>
                      Le Workshop est ouvert à <b>seulement 8 personnes.</b>
                    </>
                  ),
                },
                {
                  title: "Quel est le niveau pour participer à ce Workshop ?",
                  answer: (
                    <>
                      Au moins 2 ans d’expérience en tant que développeur
                      logiciel et une familiarité avec le développement orienté
                      objet. Une connaissance de la Clean Architecture est un
                      plus.
                      <br />
                      <br />
                      C'est un Workshop exigeant qui ne convient pas aux
                      débutants. Si vous êtes dans ce cas, je vous conseille
                      d'attendre un peu. Dans le doute, réservez-moi un créneau.
                    </>
                  ),
                },
                {
                  title: "Qu'en est-il de l'accessibilité ?",
                  answer: (
                    <>
                      Nos formations sont accessibles aux personnes en situation
                      de handicap. Les aspects, l'accessibilité et le type de
                      handicap au regard des modalités pédagogiques sont à
                      évoquer impérativement au cours de l'entretien préalable à
                      toute contractualisation afin de pouvoir orienter ou
                      accompagner au mieux les personnes en situation de
                      handicap.
                    </>
                  ),
                },
                {
                  title:
                    "Quels sont les moyens et supports pédagogiques mis en oeuvre ?",
                  answer: (
                    <>
                      Le formateur présente son support de formation et ponctue
                      sa formation d’ateliers pratiques : <br />
                      <ul>
                        <li>Etudes de cas</li>
                        <li>Exercices de code en groupe</li>
                        <li>Quizzes</li>
                      </ul>
                      Chaque session se termine ensuite par quelques exercices à
                      faire chez soi en prévision de la session suivante. La
                      prochaine session démarrera par un corrigé et une étude de
                      ces devoirs.
                    </>
                  ),
                },
                {
                  title: "Comment sont évalués les acquis ?",
                  answer: (
                    <>
                      Une feuille d'évaluation de compétences est remise à
                      chaque stagiaire leur permettant d'évaluer leurs acquis
                      enfin de formation.
                      <br />
                      <br />
                      Une seconde évaluation permet d'évaluer les modalités
                      pédagogiques et le contenu de la formation, de mesurer le
                      degré de satisfaction à chaud du stagiaire pour adapter
                      les formations suivantes aux besoins spécifiques des
                      participants.
                    </>
                  ),
                },
                {
                  title: "Quels sont les délais d'accès ?",
                  answer: (
                    <>
                      Le délai d’accès à la formation est d’un mois en moyenne.
                      Nous pouvons programmer les formations en fonction de vos
                      contraintes et de nos disponibilités.
                    </>
                  ),
                },
                {
                  title: "Et si le Workshop ne me plait pas ?",
                  answer: (
                    <>
                      Pas de soucis,{" "}
                      <b>le Workshop est garantie satisfait ou remboursé</b>.
                      Vous pouvez demander à quitter le Workshop et à être
                      remboursé jusqu'à la fin de la 2e session.
                      <br />
                      <br />
                      Un simple e-mail “Anthony, rend l’argent” durant cette
                      période et je vous rembourse. C’est une garantie présente
                      sur toutes mes formations.
                      <div style={{ marginTop: 40 }}>
                        <Button
                          wide
                          size={"big"}
                          url={"https://calendly.com/ancyr-academy/ddd"}
                        >
                          Je veux réserver ma place maintenant
                        </Button>
                      </div>
                    </>
                  ),
                },
              ]}
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
