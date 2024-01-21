"use client";

import { styled } from "styled-components";
import React from "react";
import { Book } from "../../modules/books/components/Book";
import { Container } from "../../modules/ui/Container";
import { PageIntro } from "../../modules/ui/PageIntro";
import { mediaQuery, size } from "../../modules/ui/media-query";

const Page = () => {
  return (
    <main>
      <PageIntro subtitle="Retrouvez mes e-books techniques " title="Livres" />
      <Container>
        <List>
          <Book
            downloadUrl="https://courses.ancyracademy.fr/digital-products/527562"
            imageUrl="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/m2zZZLGlTdSi2cX30DSn"
            isFree
            title="Introduction à la Clean Architecture"
          >
            Vous ne connaissez pas la Clean Architecture ? Ce petit e-book vous
            propose de la découvrir en partant d'un constant que n'importe quel
            développeur a pu faire dans sa carrière, avant de la présenter dans
            les grandes lignes.
          </Book>
          <Book
            downloadUrl="https://courses.ancyracademy.fr/digital-products/527560"
            imageUrl="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/zcDDBbSIRzKElhzrAN1n"
            isFree
            title="Road to Senior"
          >
            Cet e-book recense une liste de notions à connaître pour devenir un
            développeur Senior qui se démarque. Il est destiné aux développeurs
            qui ont besoin d'une roadmap et de références à suivre pour
            progresser.
          </Book>
        </List>
      </Container>
    </main>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  max-width: 880px;
  margin-inline: auto;
  margin-top: 80px;

  ${mediaQuery(size.small)} {
    gap: 80px;
  }
`;

export default Page;
