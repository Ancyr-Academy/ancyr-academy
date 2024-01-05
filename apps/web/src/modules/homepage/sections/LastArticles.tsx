"use client";

import styled from "styled-components";
import React from "react";
import { Article } from "../components/Article";
import { Container } from "../../ui/Container";
import { pxToRem } from "../../ui/font-utils";
import { SectionTitle } from "../components/SectionTitle";

export const LastArticles: React.FC = () => {
  return (
    <Container>
      <View>
        <SectionTitle>Derniers Articles</SectionTitle>
        <List>
          <Article
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices arcu at elit aliquet, vitae gravida mauris fermentum. Integer dignissim sem risus, et egestas erat fringilla id. Suspendisse at eros mauris. Proin feugiat, odio ut porttitor malesuada, enim tortor placerat lorem, eget imperdiet augue est at nibh"
            title="Dernières nouveautés de Next 14"
            url="/"
          />
          <Article
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices arcu at elit aliquet, vitae gravida mauris fermentum. Integer dignissim sem risus, et egestas erat fringilla id. Suspendisse at eros mauris. Proin feugiat, odio ut porttitor malesuada, enim tortor placerat lorem, eget imperdiet augue est at nibh"
            title="Open/Closed Principle"
            url="/"
          />
          <Article
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices arcu at elit aliquet, vitae gravida mauris fermentum. Integer dignissim sem risus, et egestas erat fringilla id. Suspendisse at eros mauris. Proin feugiat, odio ut porttitor malesuada, enim tortor placerat lorem, eget imperdiet augue est at nibh"
            title="Template Method Pattern"
            url="/"
          />
          <Article
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices arcu at elit aliquet, vitae gravida mauris fermentum. Integer dignissim sem risus, et egestas erat fringilla id. Suspendisse at eros mauris. Proin feugiat, odio ut porttitor malesuada, enim tortor placerat lorem, eget imperdiet augue est at nibh"
            title="Architecture Hexagonale"
            url="/"
          />
        </List>
      </View>
    </Container>
  );
};

const View = styled.div`
  margin-block: 50px;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
