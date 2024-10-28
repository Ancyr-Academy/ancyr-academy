"use client";

import { Container } from "@/components/Container";
import React from "react";
import { styled } from "styled-components";
import { Paragraph, Title, UnorderedList } from "../components/Typography";

export const Intro: React.FC<{}> = () => {
  return (
    <View>
      <Block>
        <Container>
          <Title>Vous connaissez cette histoire...</Title>
          <Paragraph>
            Vous développez une nouvelle application, et jusqu'ici tout va bien.
            <br /> <br />
            Puis quelques mois passent.
            <br /> <br />
            La productivité décline.
            <br /> <br />
            Vous dépensez de plus en plus de temps à chasser des bugs.
            <br /> <br />
            Les branches de votre dépôt git se multiplient et vivent de plus en
            plus longtemps.
            <br /> <br />
            Vous déployez une fois par semaine.
            <br /> <br />
            Puis une fois par mois.
            <br />
            <br />
            Petit à petit, vous perdez la joie et la motivation de travailler
            sur ce projet.
            <br /> <br />
            Parce que vous gaspillez votre temps sur des tâches qui n'ont aucun
            sens.
            <br /> <br />
            Inexorablement, le développement freeze et l'équipe de partir sur
            une v2. <br /> <br />
            <b> Et on recommence.</b>
          </Paragraph>
        </Container>
      </Block>
      <Block>
        <Container>
          <Title>C'est à ce que ressemble votre quotidien ?</Title>
          <UnorderedList>
            <li>
              Corriger un bug vous prendre des jours car le code est noyé dans
              sa propre complexité
            </li>
            <li>
              Vous avez peur de modifier le code au risque de casser d'autres
              fonctionnalités complètement différentes
            </li>
            <li>
              Vous n'écrivez même plus de tests car ils se cassent sans raison à
              chaque modification
            </li>
          </UnorderedList>
          <Paragraph>
            Ce quotidien, je l'ai moi aussi connu. <br />
            Comme la majorité des développeurs.
            <br />
          </Paragraph>
        </Container>
      </Block>
      <Block>
        <Container>
          <Title>Imaginez un autre monde...</Title>

          <Paragraph>
            Dans lequel vous passez la majeur partie de votre temps à ajouter de
            nouvelles fonctionnalités.
            <br />
            <br />
            Les bugs ne représentent que 10% de votre temps.
            <br />
            <br />
            Vous déployez plusieurs fois chaque jour.
            <br />
            <br />
            Vous intégrez continuellement votre travail et vos branches ne
            vivent que quelques heures. <br />
            <br />
            Vous travaillez en parallèle de plusieurs développeurs sur le même
            code sans jamais vous marcher sur les pieds.
            <br />
            <br />
            Vous êtes même capable de développez sans back-end, ni base de
            données, ni service externe. <br />
            <br />
            L'entièreté de votre code est testable dans ses moindres recoins, et
            vous pouvez refactoriser en toute confiance. <br />
            <br />
            Vous pouvez changer de front-end, de base de données ou de
            fournisseur de service externe en seulement quelques semaines, sans
            avoir à réécrire toute votre application. <br />
            <br />
            <br />
            Vous <b>ruinez</b> la compétition.
            <br />
            Le tout sur une architecture monolithique, modulaire et scalable.{" "}
            <br />
            <br />
            <b>Vous pensez que c'est impossible ?</b>
            <br />
            <b>Et pourtant, ce monde existe.</b>
            <br />
          </Paragraph>
        </Container>
      </Block>
      <Block>
        <Container>
          <Title>Développez autrement avec la Clean Architecture</Title>

          <Paragraph>
            La Clean Architecture est un ensemble de guidelines et de principes
            qui ont un seul objectif.
            <br />
            <br />
            <b>Maximiser la productivité des développeurs.</b>
            <br />
            <br />
            En comprenant et en applicant ces principes, vous êtes certain
            d'obtenir une bonne architecture.
            <br />
            <br />
            <b>Une architecture qui vous redonne le pouvoir.</b>
            <br />
            <br />
            En suivant ces principes, vous obtiendrez :
          </Paragraph>
          <UnorderedList>
            <li>
              Une application décomposée en modules indépendants et autonomes
            </li>
            <li>Une décomposition qui minimise la complexité du code</li>
            <li>Des composants réutilisables dans d'autres projets</li>
            <li>
              Une arborrescence de fichiers claire dans laquel il est facile de
              naviguer
            </li>
            <li>
              Un code organisé autour du métier et compréhensible par le métier
            </li>
            <li>Une application entièrement testable</li>
          </UnorderedList>
        </Container>
      </Block>
    </View>
  );
};

export const View = styled.div`
  margin-block: 80px;
`;

const Block = styled.div`
  margin-top: 60px;
`;
