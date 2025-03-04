"use client";

import { styled } from "styled-components";
import React from "react";
import { allWorkshops, Container, PageIntro } from "@ancyracademy/shared";
import { mediaQuery, size } from "../../ui/media-query";
import { Workshop } from "../../components/Workshop";

const Page = () => {
  return (
    <main>
      <PageIntro
        subtitle="Suivez 2 à 3 jours de workshop en live avec moi sur des sujets avancés de l'IT"
        title="Workshop"
        showPromotional={false}
      />
      <Container>
        <List>
          {allWorkshops.map((workshop, index) => (
            <Workshop key={index} workshop={workshop} />
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
