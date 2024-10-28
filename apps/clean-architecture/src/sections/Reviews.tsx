"use client";

import React from "react";
import { styled } from "styled-components";
import { breakpoints, mediaQuery } from "../../lib/global-styles";
import { Container } from "../components/Container";
import { Paragraph } from "../components/Typography";

export const Reviews: React.FC<{}> = () => {
  return (
    <View>
      <Container>
        <Title>Ce qu'en disent les élèves</Title>
        <Rows>
          <Review>
            <Paragraph>
              J'ai eu le privilège de participer à la formation Clean
              Architecture d'Anthony et{" "}
              <b>je suis impressionné par la qualité et le contenu</b>. Cette
              formation a dépassé toutes mes attentes et m'a fourni une
              compréhension approfondie sur la façon d'architecturer une
              application de manière cohérente.
              <br />
              <br />
              Anthony a{" "}
              <b>
                une manière exceptionnelle de présenter des concepts complexes
                de façon simple et compréhensible
              </b>
              . Chaque module est bien structuré, avec des explications
              détaillées et des exemples concrets. C'est un expert dans le
              domaine de la Clean Architecture et on le ressent.
              <br />
              <br />
              Je recommande vivement cette formation à{" "}
              <b>
                tous les développeurs qui souhaitent améliorer leurs compétences
                et créer des applications hautement maintenable et de qualité.
              </b>{" "}
              Merci encore pour cette expérience enrichissante !
            </Paragraph>
            <Author>Simon Potier</Author>

            <ProfilePicture url={"/images/simonpotier.png"} />
          </Review>
          <Review>
            <Paragraph>
              Avant cette formation, je cherchais à améliorer la qualité et la
              maintenabilité des architectures Front-end.{" "}
              <b>
                Cette formation a non seulement répondu à mes attentes, mais
                elle les a même dépassées.
              </b>
              <br />
              <br />
              Anthony a pris le temps{" "}
              <b>
                d'expliquer en détail les fondements de la clean architecture
              </b>{" "}
              avant de la présenter, ce qui a rendu le contenu très accessible.
              Les explications fournies étaient <b>claires et précises</b>, ce
              qui m'a permis de comprendre le "pourquoi" derrière le "comment".
              De plus, la cerise sur le gâteau a été le mini-projet pratique à
              la fin, où j'ai pu voir de manière concrète{" "}
              <b>les avantages qu'une telle architecture peut apporter.</b>
              <br />
              <br />
              En résumé, cette formation a été extrêmement enrichissante et m'a
              permis de consolider mes connaissances en clean architecture.{" "}
              <b>
                Je la recommande vivement à quiconque souhaite améliorer ses
                compétences en matière d'architecture Front-end.
              </b>
            </Paragraph>
            <Author>Chaka</Author>
          </Review>
          <Review>
            <Paragraph>
              Je conseil fortement la formation d'Anthony.{" "}
              <b>Elle convient a tous, debutant et confirmé</b>. Anthony prend
              le temps d'expliquer toute la theorie autour de la clean
              architecture pour ensuite nous plonger dans une etude de cas avec
              react et next. De plus le contenu est mis a jour en fonction des
              remarques faites par les membres de la formation.{" "}
              <b>Je recommande a 100% !</b>
            </Paragraph>
            <Author
              href="https://www.linkedin.com/in/yazid-daoudi/"
              target="_blank"
            >
              Yazid Daoudi
            </Author>

            <ProfilePicture url={"/images/yaziddaoudi.jpeg"} />
          </Review>
          <Review>
            <Paragraph>
              La formation Clean Architecture est clairement{" "}
              <b>
                une référence à avoir pour tous ceux qui cherchent à apprendre
                les bonnes pratiques
              </b>{" "}
              et faire du code professionnel et propre ! La formation est bien
              structurée et Anthony fait preuve d'une excellent pédagogie pour
              enseigner les concepts,{" "}
              <b>
                il est également toujours là pour nous répondre lorsqu'on a des
                questions
              </b>
              , ce qui permet d'avancer plus vite et de mieux comprendre les
              concepts !
            </Paragraph>
            <Author
              href="https://www.linkedin.com/in/adrien-verschaere/"
              target="_blank"
            >
              Adrien Verschaere
            </Author>

            <ProfilePicture url={"/images/adrienverschaere.jpeg"} />
          </Review>
          <Review>
            <Paragraph>
              Si je devais donner trois mots pour la définir, ce serait :{" "}
              <b>Clarté, Pédagogie et Pratique</b>. Anthony a une façon unique
              de rendre les concepts parfois abstraits, simples et accessibles.
              Il utilise de nombreux schémas et fournit des exemples concrets,
              ce qui permet de bien visualiser les concepts et de comprendre
              leur application pratique.{" "}
              <b>
                Sa pédagogie est vraiment efficace et il est toujours disponible
                pour répondre à toutes nos questions.
              </b>
              La partie théorique de la formation a grandement facilité mon
              apprentissage et m'a permis de progresser de manière
              significative. C'est pourquoi{" "}
              <b>
                je recommande vivement cette formation à toute personne
                souhaitant approfondir sa compréhension de l'architecture
                logicielle !
              </b>
            </Paragraph>
            <Author
              href="https://www.linkedin.com/in/melainadonati/"
              target="_blank"
            >
              Melaïna Donati
            </Author>
            <ProfilePicture url={"/images/meldonati.jpeg"} />
          </Review>
          <Review>
            <Paragraph>
              Remettant continuellement en question la solidité et la facilité
              de maintenance de mes programmes,{" "}
              <b>
                j'ai finalement obtenu des réponses grâce à la formation
                dispensée par Anthony.
              </b>
              J'ai ainsi découvert que mon code était bel et bien robuste et
              maintenable, mais qu'il pouvait l'être encore bien plus. Je tiens
              à souligner que{" "}
              <b>cette formation est incroyablement détaillée et complète</b>,
              même pour des étudiants débutant en programmation.
            </Paragraph>
            <Author
              href="https://www.linkedin.com/in/flaviomoreno94/"
              target="_blank"
            >
              Flavio Moreno
            </Author>

            <ProfilePicture url={"/images/flaviomoreno.jpeg"} />
          </Review>
          <Review>
            <Paragraph>
              Une première partie théorique qui reprend l'ensemble des principes
              de la Clean Architecture, principes SOLID, composants et
              architecture. <b> Les explications sont clairs</b> et il ne fait
              pas de doute que Anthony maitrise son sujet.
            </Paragraph>
            <Author href="https://www.linkedin.com/in/theode/" target="_blank">
              Théo Depelsemacker
            </Author>

            <ProfilePicture url={"/images/theodepelsmacker.jpeg"} />
          </Review>
        </Rows>
      </Container>
    </View>
  );
};

const View = styled.div`
  margin-block: 80px;
  ${mediaQuery(breakpoints.phone)} {
    margin-block: 40px;
  }
`;
const Title = styled.h2`
  font-size: var(--fs-very-big);
  color: var(--color-primary);
  text-align: center;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;

  gap: 60px;
`;

const Review = styled.div`
  position: relative;

  background-color: var(--color-primary);
  border-radius: 10px;

  padding-inline: 28px;
  padding-block: 24px;

  ${Paragraph} {
    color: var(--color-secondary);
    font-size: var(--fs-default);

    b {
      font-weight: 900;
    }
  }
`;

const ProfilePicture = styled.div<{ url: string }>`
  position: absolute;
  left: 30px;
  bottom: -40px;

  width: 80px;
  height: 80px;
  border-radius: 100%;

  background-image: url("${(props) => props.url}");
  background-position: center;
  background-size: cover;
`;

const Author = styled.a`
  margin: 0;
  display: block;

  font-size: var(--fs-default);
  color: var(--color-secondary);
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  text-align: right;

  transition: all 0.2s;

  &:hover {
    text-decoration: underline;
  }
`;
