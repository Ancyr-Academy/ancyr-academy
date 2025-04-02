"use client";

import React from "react";
import { coursePoints, Overview } from "../components/Overview";
import {
  buildingBlocks,
  Courses,
  SalesPage,
  SellingParagraph,
} from "../components/SalesPage";

export const CQRSPage = () => {
  return (
    <main>
      <Overview
        title={"Command / Query Responsibility Segregation"}
        subtitle={
          <>
            Apprenez à séparer votre <b>modèle de lecture</b> de votre{" "}
            <b>modèle d'écriture</b> pour optimiser chaque modèle pour ses
            besoins spécifiques.
          </>
        }
        points={coursePoints({ hours: 2 })}
      />
      <SalesPage
        sections={[
          buildingBlocks.about(
            <SellingParagraph>
              Cette formation vise à vous enseigner le principe du CQRS,
              c'est-à-dire de dissocier votre modèle de lecture de votre modèle
              de lecture afin de pouvoir créer un modèle d'écriture riche et un
              modèle de lecture optimisé pour les besoins de votre front-end.
              <br />
              <br />
              Vous allez explorer différents niveaux de CQRS en partant
              simplement d'une séparation des requêtes et commandes pour aller
              jusqu'à utiliser{" "}
              <b>
                des projections, une approche évènementielle et deux bases de
                données différentes.
              </b>
            </SellingParagraph>,
          ),
          buildingBlocks.content([
            "La véritable définition du CQRS",
            "Les différents niveaux d'implémentation du CQRS",
            "Comment l'implémenter dans vos propres projets",
            "Qu'est-ce qu'une projection et comment la maintenir",
            "Ce qu'est l'Eventual Consistency et comment l'implémenter",
            "Le Transactional Outbox Pattern pour garantir la cohérence de vos données",
            "Le Inbox Pattern pour garantir la mise à jour des projections",
          ]),
          buildingBlocks.target([
            "Aux développeurs qui veulent découvrir comment fonctionne le CQRS",
            "Qui désirent comprendre l'intérêt d'avoir deux modèles distincts pour des besoins différents",
            "Qui souhaitent découvrir des patterns avancés d'intégration",
          ]),
          buildingBlocks.professor,
          buildingBlocks.reviews,
          buildingBlocks.courses(
            <Courses
              showDiscount={false}
              courses={[
                {
                  id: "6106784",
                  imageUrl:
                    "https://cdn.filestackcontent.com/g3Yv0uBaQ2OYoY8hrnZH",
                  isHot: true,
                  price: 50,
                  status: {
                    type: "available",
                    productId: "6106784",
                  },
                  title: "CQRS",
                  resume: (
                    <>
                      Apprenez à séparer votre <b>modèle de lecture</b> de votre{" "}
                      <b>modèle d'écriture</b> pour optimiser chaque modèle pour
                      ses besoins spécifiques.
                    </>
                  ),
                  previewUrl:
                    "https://courses.ancyracademy.fr/courses/cqrs/lectures/59980560",
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
