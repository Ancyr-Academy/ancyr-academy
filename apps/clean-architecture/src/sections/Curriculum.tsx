"use client";

import React from "react";
import { styled } from "styled-components";
import { breakpoints, mediaQuery } from "../../lib/global-styles";
import { Container } from "../components/Container";

export const Curriculum: React.FC<{}> = () => {
  return (
    <View>
      <Container>
        <Title>Au Programme</Title>
        <Block>
          <SubTitle>Les paradigmes de programmation</SubTitle>
          <Paragraph>
            Nous verrons ensemble quels sont les{" "}
            <b>3 paradigmes de programmation</b>, leur historique et leur
            intérêt dans la création de logiciels robustes.
          </Paragraph>
        </Block>

        <Block>
          <SubTitle>Les Principes SOLID</SubTitle>
          <Paragraph>
            Nous étudierons les principes SOLID avec{" "}
            <b>des exemples concrets de violations et de solutions</b> à ces
            principes afin de renforcer notre conscience des failles qui peuvent
            gangréner nos systèmes.
          </Paragraph>
        </Block>
        <Block>
          <SubTitle>La théorie des composants & partitions de système</SubTitle>
          <Paragraph>
            L'une des parties les plus lourdes concerne{" "}
            <b>
              les différentes façons de décomposer nos systèmes en sous-modules
            </b>
            , les forces et faiblesses de ces formes de partitions et les
            propriétés concernant le couplage et la cohésion des composants
          </Paragraph>
        </Block>
        <Block>
          <SubTitle>Les dépendances</SubTitle>
          <Paragraph>
            Sujet majeur de toute forme d'architecture, nous étudierons{" "}
            <b>les dépendances</b> avec des notions théoriques concrètes sur les
            différents types de dépendances et leur méthodes d'injection, puis
            nous verrons{" "}
            <b>
              en quoi l'injection de dépendance est vitale pour la Clean
              Architecture.
            </b>
          </Paragraph>
        </Block>
        <Block>
          <SubTitle>La Clean Architecture</SubTitle>
          <Paragraph>
            Enfin, nous discuterons des différentes formes d'architecture et
            finirons naturellement par aboutir sur la Clean Architecture, son
            fonctionnement et les différents patterns qui la composent, avec un
            point de vue moderne qui parlera aux développeurs les plus
            débutants.
          </Paragraph>
        </Block>
        <Block>
          <SubTitle>Pratique : application web</SubTitle>
          <Paragraph>
            Nous développerons ensemble{" "}
            <b>une application React en TypeScript avec NextJS en TDD</b> pour
            mettre en pratique la connaissance théorique au front. Vous ne
            développerez plus jamais des applications React comme avant et
            saurez parfaitement architecturer vos futures applications
            front-end, peu importe le framework.
          </Paragraph>
        </Block>
        <Block>
          <SubTitle>Pratique : application NodeJS</SubTitle>
          <Paragraph>
            Nous développerons ensemble{" "}
            <b>une application NestJS / TypeScript en TDD</b> reprenant les
            règles métiers d'une application réelle afin de développer une API
            en Clean Architecture déployable en production.{" "}
            <b>
              Vous découvrirez une facette du développement back-end que vous
              n'auriez certainement jamais soupçonnée.
            </b>
          </Paragraph>
        </Block>
      </Container>
    </View>
  );
};

const View = styled.div`
  background-color: var(--color-primary);
  padding-block: 80px;

  ${mediaQuery(breakpoints.phone)} {
    padding-block: 40px;
  }
`;

const Title = styled.h2`
  color: var(--color-secondary);
  font-size: var(--fs-very-big);
  text-align: center;

  margin: 0;
`;

const Block = styled.div`
  margin-block: 80px;

  ${mediaQuery(breakpoints.phone)} {
    margin-block: 40px;
  }
`;

const SubTitle = styled.h6`
  color: var(--color-secondary);
  font-size: var(--fs-medium);
  text-transform: uppercase;

  margin: 0;
`;

const Paragraph = styled.p`
  color: var(--color-secondary);
  font-size: var(--fs-default);
  line-height: 1.5;

  margin: 0;
  margin-top: 12px;
`;
