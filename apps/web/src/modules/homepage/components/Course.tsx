import { styled } from "styled-components";
import React from "react";
import { pxToRem } from "../../ui/font-utils";
import { Button } from "../../ui/Button";
import { mediaQuery, size } from "../../ui/media-query";

export const Course: React.FC<{
  type: string;
  title: string;
  resume: string;
  imageUrl: string;
  url: string;
  isHot?: boolean;
  isFree?: boolean;
}> = ({ type, title, resume, imageUrl, url, isHot, isFree }) => {
  return (
    <View>
      {isHot ? <HotBadge>Hot</HotBadge> : null}
      {isFree ? <HotBadge>GRATUIT</HotBadge> : null}
      <Head>
        <ImageContainer>
          <img src={imageUrl} />
        </ImageContainer>
        <Texts>
          <Type>{type}</Type>
          <Title>{title}</Title>
          <Resume>{resume}</Resume>
        </Texts>
      </Head>
      <Button size="big" url={url} wide>
        Découvrir la formation
      </Button>
    </View>
  );
};

const View = styled.div`
  position: relative;

  padding-inline: 32px;
  padding-top: 32px;
  padding-bottom: 20px;

  border: 1px solid #dfe8e8;
  border-radius: 5px;

  margin-inline: auto;

  ${mediaQuery(size.medium)} {
    padding-inline: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

const HotBadge = styled.div`
  position: absolute;
  top: -20px;
  right: 20px;

  background-color: #ee5a1b;
  color: white;
  font-weight: 600;

  padding-inline: 16px;
  padding-block: 8px;
  border-radius: 4px;

  text-transform: uppercase;
  font-size: ${pxToRem(20)};
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQuery(size.medium)} {
    flex-direction: column;
    gap: 0;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  z-index: -1;

  img {
    width: 100%;

    ${mediaQuery(size.medium)} {
      height: initial;
      object-fit: contain;
    }
  }
`;

const FreeBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;

  background-color: #49d5cc;
  color: white;
  font-weight: 600;

  padding-inline: 8px;
  padding-block: 4px;
  border-radius: 4px;

  text-transform: uppercase;
  font-size: ${pxToRem(18)};
`;

const Texts = styled.div`
  padding-block: 32px;
`;

const Type = styled.h6`
  font-size: ${pxToRem(20)};
  text-transform: uppercase;
  color: #7caeb1;

  margin-top: 0;
  margin-bottom: 4px;
`;

const Title = styled.h4`
  font-size: ${pxToRem(32)};
  margin-top: 0;
  margin-bottom: 14px;
`;

const Resume = styled.p`
  font-size: ${pxToRem(20)};
  line-height: 1.3;
  margin: 0;
  color: #3e3e3e;
`;

const KeyPoints = styled.div`
  margin-block: 40px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  ${mediaQuery(size.medium)} {
    gap: 12px;
    margin-block: 12px;
    margin-bottom: 28px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const KeyPoint = styled.div`
  font-size: ${pxToRem(20)};

  svg {
    fill: var(--color-primary);
  }
`;

const KeyPointText = styled.span`
  margin-left: 10px;
  line-height: 1.3;
`;
