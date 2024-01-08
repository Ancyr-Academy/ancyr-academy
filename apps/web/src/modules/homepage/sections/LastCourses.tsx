"use client";

import styled from "styled-components";
import React from "react";
import { Article } from "../components/Article";
import { Container } from "../../ui/Container";
import { pxToRem } from "../../ui/font-utils";
import { SectionTitle } from "../components/SectionTitle";
import { Course } from "../components/Course";

export const LastCourses: React.FC = () => {
  return (
    <Container>
      <View>
        <SectionTitle>Dernières Formations</SectionTitle>
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
            url="/clean-architecture"
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
            url="https://courses.ancyracademy.fr/p/essentials-tests-unitaires"
          />
        </List>
      </View>
    </Container>
  );
};

const View = styled.div`
  margin-block: 80px;
`;

const List = styled.div`
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
`;
