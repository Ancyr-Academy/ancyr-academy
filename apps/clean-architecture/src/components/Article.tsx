import { styled } from "styled-components";
import React from "react";
import { pxToRem } from "../ui/font-utils";

export const Article: React.FC<{
  title: string;
  excerpt: string;
  url: string;
}> = ({ title, excerpt, url }) => {
  return (
    <View>
      <Title>{title}</Title>
      <Excerpt>{excerpt}</Excerpt>
      <ReadMore href={url}>Lire la suite</ReadMore>
    </View>
  );
};

const View = styled.div``;
const Title = styled.h4`
  font-size: ${pxToRem(20)};
  margin-bottom: 8px;
`;
const Excerpt = styled.p`
  font-size: ${pxToRem(20)};
`;
const ReadMore = styled.a`
  font-size: ${pxToRem(18)};
  text-transform: uppercase;

  font-weight: 500;
  color: var(--color-primary);
  text-decoration: none;
`;
