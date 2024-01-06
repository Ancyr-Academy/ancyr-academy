"use client";

import styled from "styled-components";
import React from "react";
import { Book } from "../../modules/books/components/Book";
import { Container } from "../../modules/ui/Container";
import { PageIntro } from "../../modules/ui/PageIntro";
import { mediaQuery, size } from "../../modules/ui/media-query";
import { Course } from "../../modules/homepage/components/Course";

const Page = () => {
  return (
    <main>
      <PageIntro
        subtitle="Retrouvez mes formations & cours techniques"
        title="Formations"
      />
      <Container>
        <List>
          <Course
            imageUrl="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/WV6TlGkbRQChrQCdtLbn"
            isFree={false}
            isHot
            keyPoints={[
              "Découvrir les principes de la Clean Architecture",
              "Différencier les types de tests et leur utilité",
              "Reconnaître et appliquer les patterns les plus courants pour garder ses tests souples",
              "Mettre en place une stratégie de tests adapté au projet en cours",
              "Mettre en place des tests d’intégration facilement en automatisé",
              "Structurer et découper ses tests selon la difficulté du code à tester et le besoin du client",
            ]}
            resume="Apprenez à développer des applications robustes et scalables en mettant en place une Clean Architecture testée de bout en bout."
            title="Clean Architecture"
            type="Formation"
            url="/1"
          />
          <Course
            imageUrl="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/ZPoSCdqeQK2NNUe8DDkP"
            isFree
            isHot={false}
            keyPoints={[
              "Définir ce que sont les tests automatisés",
              "Différencier les types de tests et leur utilité",
              "Reconnaître et appliquer les patterns les plus courants pour garder ses tests souples",
              "Mettre en place une stratégie de tests adapté au projet en cours",
              "Mettre en place des tests d’intégration facilement en automatisé",
              "Structurer et découper ses tests selon la difficulté du code à tester et le besoin du client",
            ]}
            resume="Découvrez ce que sont les tests unitaires et apprenez à les mettre en oeuvre dans n’importe quel type de projet, qu’il s’agisse d’une app, d’un CLI ou d’un jeu."
            title="Tests Unitaires"
            type="Essentials"
            url="/2"
          />
        </List>
      </Container>
    </main>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-inline: auto;
  margin-top: 80px;

  ${mediaQuery(size.small)} {
    gap: 80px;
  }
`;

export default Page;
