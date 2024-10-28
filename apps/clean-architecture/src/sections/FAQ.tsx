"use client";

import React from "react";
import { styled } from "styled-components";
import { getCourseURL } from "../../lib/app";
import { breakpoints, mediaQuery } from "../../lib/global-styles";
import { Container } from "../components/Container";
import { Paragraph } from "../components/Typography";

export const FAQ: React.FC<{}> = () => {
  return (
    <View>
      <Container>
        <Title>Foire aux questions</Title>
        <Rows>
          <QuestionBlock>
            <Question>
              Saurais-je faire du front-end avec cette formation ?
            </Question>
            <Answer>
              Oui. L'objectif est de vous enseigner la Clean Architecture, peu
              importe l'environnement du logiciel. A l'issue de cette formation,
              nous aurons vu un exemple concret de mise en application. Nous
              allons coder une application front-end en ReactJS, de A à Z.
            </Answer>
          </QuestionBlock>
          <QuestionBlock>
            <Question>
              Comment cette formation se compare-t-elle aux autres formations ?
            </Question>
            <Answer>
              Il existe plusieurs formations en France qui traitent de près ou
              de loin à la Clean Architecture, mais aucune ne se dédie à 100% à
              la Clean Architecture.
              <br /> C'est la raison pour laquelle j'ai décidé de créer{" "}
              <b>une formation 100% dédiée à la Clean Architecture</b>, en
              pratique, dans un environnement TypeScript avec des outils comme
              NodeJS & React.
            </Answer>
          </QuestionBlock>
          <QuestionBlock>
            <Question>
              Puis-je utiliser mon crédit CPF pour me fournir cette formation ?
            </Question>
            <Answer>
              A l'heure actuelle, <b>cela n'est pas possible</b>.
            </Answer>
          </QuestionBlock>
          <QuestionBlock>
            <Question>
              A qui puis-je m'adresser si j'ai des questions pendant la
              formation ?
            </Question>
            <Answer>
              <b>
                Je serai disponible personnellement pour répondre à vos
                questions{" "}
              </b>
              sur mon Discord, une communauté qui rassemble plus de{" "}
              <b>1000 développeurs</b> sensibilisés à la qualité dans
              l'ingénierie logicielle.
            </Answer>
          </QuestionBlock>
        </Rows>
        <BuyButton href={getCourseURL()}>J'accède à la formation</BuyButton>
      </Container>
    </View>
  );
};

const View = styled.div`
  margin-top: 120px;
  margin-bottom: 40px;
  ${mediaQuery(breakpoints.phone)} {
    margin-top: 80px;
    margin-bottom: 20px;
  }
`;
const Title = styled.h2`
  font-size: var(--fs-very-big);
  color: var(--color-primary);
  text-align: center;
`;
const Rows = styled.div`
  margin-block: 80px;
  ${mediaQuery(breakpoints.phone)} {
    margin-block: 40px;
  }
`;

const QuestionBlock = styled.div`
  margin-bottom: 40px;
`;
const Question = styled.h6`
  font-size: var(--fs-default);
  color: var(--color-primary);

  text-transform: uppercase;
  margin: 0;
`;
const Answer = styled(Paragraph)`
  margin: 0;
  margin-top: 8px;
`;

export const BuyButton = styled.a`
  display: block;
  text-decoration: none;

  background-color: var(--button-background-color);
  color: var(--button-text-color);

  padding-block: 24px;
  padding-inline: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: var(--fs-default);
  text-transform: uppercase;
  font-weight: 700;

  transition: all 0.2s;

  &:hover {
    filter: brightness(1.3);
  }
`;
