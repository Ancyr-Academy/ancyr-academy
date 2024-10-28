"use client";

import React from "react";
import { styled } from "styled-components";
import { Container } from "../components/Container";
import { Paragraph, Title } from "../components/Typography";
import { breakpoints, mediaQuery } from "../../lib/global-styles";

export const Methodology: React.FC<{}> = () => {
  return (
    <View>
      <Container>
        <CenteredTitle>Ma méthodologie</CenteredTitle>
        <Row>
          <TextColumn>
            <SubTitle>Des exemples appuyés par des schémas</SubTitle>
            <Paragraph>
              J'utilise beaucoup de schémas afin de vous aider à vous
              familiariser avec les concepts les plus complexes de façon
              visuelle. Ces schémas sont d'ailleurs accompagnés{" "}
              <b>
                d'exemples concrets tirés de la vie réelle, d'anecdotes et
                d'analogies
              </b>
            </Paragraph>
          </TextColumn>
          <ImageColumn>
            <img src="/images/usecase_trip.png" />
          </ImageColumn>
        </Row>
        <Row>
          <TextColumn>
            <SubTitle>Une démonstration par le code</SubTitle>
            <Paragraph>
              Dés que possible, <b>je fais une démonstration de code</b>, par
              exemple pour montrer des exemples de violations et de solutions
              dans le cadre des principes SOLID afin d'accompagner la théorie
              d'application concrètes.
            </Paragraph>
          </TextColumn>
          <ImageColumn>
            <img src="/images/usecase_code.png" />
          </ImageColumn>
        </Row>
        <Row>
          <TextColumn>
            <SubTitle>Un cours élaboré avec les élèves</SubTitle>
            <Paragraph>
              Je suis très actif sur Discord et{" "}
              <b>élabore la formation en collaboration avec les élèves</b> qui
              me posent régulièrement des questions auxquelles je tente de
              répondre directement à l'intérieur de la formation pour en faire
              profiter le plus grand nombre.
            </Paragraph>
          </TextColumn>
          <ImageColumn>
            <img src="/images/discord.jpg" />
          </ImageColumn>
        </Row>
      </Container>
    </View>
  );
};

const View = styled.div``;
const CenteredTitle = styled(Title)`
  text-align: center;
  font-size: var(--fs-very-big);

  margin-block: 80px;
  ${mediaQuery(breakpoints.phone)} {
    margin-block: 40px;
  }
`;

const Row = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 60px;

  margin-bottom: 80px;

  ${mediaQuery(breakpoints.small)} {
    flex-direction: column;
    margin-bottom: 40px;
    gap: 0;
  }
`;
const SubTitle = styled.h2`
  color: var(--color-primary);
  font-size: var(--fs-medium);
  text-transform: uppercase;

  margin: 0;
`;
const TextColumn = styled.div``;
const ImageColumn = styled.div`
  img {
    height: 280px;
    width: 420px;
    object-fit: contain;
  }

  ${mediaQuery(breakpoints.small)} {
    img {
      height: 280px;
      width: auto;
    }
  }

  ${mediaQuery(breakpoints.phone)} {
    img {
      height: 200px;
      width: 360px;
    }
  }
`;
