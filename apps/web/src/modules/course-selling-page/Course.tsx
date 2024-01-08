import React from "react";
import styled from "styled-components";
import { pxToRem } from "../ui/font-utils";
import { Button } from "../ui/Button";
import { mediaQuery, size } from "../ui/media-query";

export const Course: React.FC<{
  title: string;
  text: string;
  price: number;
  imageUrl: string;
  url: string;
  isHot?: boolean;
}> = ({ title, text, price, imageUrl, url, isHot }) => {
  return (
    <View>
      <HeadImage src={imageUrl} />
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Pricing>{price}€ TTC</Pricing>
      </Content>

      <Button url={url} wide>
        Découvrir
      </Button>
    </View>
  );
};

const View = styled.div`
  display: block;
  text-decoration: none;
  color: #3e3e3e;

  border: 1px solid #c0c0c0;
  border-radius: 10px;
`;

const HeadImage = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding-inline: 40px;
  padding-block: 20px;

  ${mediaQuery(size.medium)} {
    padding-inline: 24px;
    padding-block: 12px;
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: ${pxToRem(24)};
  color: var(--color-primary);
`;

const Text = styled.p`
  line-height: 1.2;
  font-size: ${pxToRem(24)};
`;

const Pricing = styled.p`
  text-align: right;
  font-size: ${pxToRem(24)};
  font-weight: 700;

  margin-block: 0;
`;
