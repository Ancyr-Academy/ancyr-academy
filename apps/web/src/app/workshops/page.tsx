"use client";

import { styled } from "styled-components";
import React from "react";
import { allWorkshops, Container, PageIntro } from "@ancyracademy/shared";
import { mediaQuery, size } from "../../ui/media-query";
import { WorkshopResume } from "../../components/WorkshopResume";

const Page = () => {
  return (
    <main>
      <PageIntro
        subtitle="Suivez des ateliers pratiques en temps réel animé par un formateur expert."
        title="Workshop"
        showPromotional={false}
      />
      <Container>
        <List>
          {allWorkshops.map((workshop, index) => (
            <WorkshopResume
              key={index}
              title={workshop.title}
              resume={workshop.resume}
              imageUrl={workshop.imageUrl}
              url={workshop.url}
              nextDates={workshop.nextDates}
            />
          ))}
        </List>
      </Container>
    </main>
  );
};

const List = styled.div`
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;

  ${mediaQuery(size.medium)} {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  ${mediaQuery(size.small)} {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
  }
`;

export default Page;
