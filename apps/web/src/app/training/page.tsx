"use client";

import { styled } from "styled-components";
import React from "react";
import { Container } from "../../ui/Container";
import { PageIntro } from "../../ui/PageIntro";
import { mediaQuery, size } from "../../ui/media-query";
import { Training } from "../../components/Training";
import { trainings } from "../../core/trainings";

const Page = () => {
  return (
    <main>
      <PageIntro
        subtitle="Suivez 2 à 3 jours de formation en live avec moi sur des sujets complexes mais essentielles"
        title="Training / Formations"
        showPromotional={false}
      />
      <Container>
        <List>
          {trainings.map((training, index) => (
            <Training key={index} training={training} />
          ))}
        </List>
      </Container>
    </main>
  );
};

const List = styled.div`
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 28px;

  ${mediaQuery(size.medium)} {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
  }
`;

export default Page;
