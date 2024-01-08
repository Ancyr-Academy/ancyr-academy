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
            resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices arcu at elit aliquet, vitae gravida mauris fermentum. Integer dignissim sem risus, et egestas erat fringilla id. Suspendisse at eros mauris. Proin feugiat, odio ut porttitor malesuada, enim tortor placerat lorem, eget imperdiet augue est at nibh."
            title="Introduction à la Clean Architecture"
          />
          <Book
            downloadUrl="https://courses.ancyracademy.fr/digital-products/527560"
            imageUrl="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/zcDDBbSIRzKElhzrAN1n"
            isFree
            resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices arcu at elit aliquet, vitae gravida mauris fermentum. Integer dignissim sem risus, et egestas erat fringilla id. Suspendisse at eros mauris. Proin feugiat, odio ut porttitor malesuada, enim tortor placerat lorem, eget imperdiet augue est at nibh."
            title="Road to Senior"
          />
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
