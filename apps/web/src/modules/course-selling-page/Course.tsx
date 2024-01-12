import React from "react";
import { styled } from "styled-components";
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
      {isHot ? <HotBadge>Hot</HotBadge> : null}
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
  position: relative;

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
  font-size: ${pxToRem(21)};
  color: var(--color-primary);
`;

const Text = styled.p`
  line-height: 1.2;
  font-size: ${pxToRem(21)};
`;

const Pricing = styled.p`
  text-align: right;
  font-size: ${pxToRem(21)};
  font-weight: 700;

  margin-block: 0;
`;

const HotBadge = styled.div`
  @keyframes text-wizz {
    0%,
    5%,
    50%,
    100% {
      transform: translateX(0);
    }
    10% {
      transform: translateX(-10px); /* shake to the left */
    }
    20% {
      transform: translateX(10px); /* shake to the right */
    }
    30% {
      transform: translateX(-5px); /* shake to the left */
    }
    40% {
      transform: translateX(5px); /* shake to the right */
    }
  }

  position: absolute;
  top: -10px;
  right: 20px;

  background-color: #ec420e;
  color: white;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 80px;

  border-radius: 4px;

  text-transform: uppercase;
  font-size: ${pxToRem(20)};
  animation: text-wizz 1.2s infinite; /* Apply the animation */
`;
