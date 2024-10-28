import React from "react";
import { styled } from "styled-components";
import { Button } from "../ui/Button";
import { pxToRem } from "../ui/font-utils";
import { mediaQuery, size } from "../ui/media-query";

export const Book: React.FC<{
  title: string;
  imageUrl: string;
  downloadUrl: string;
  children: React.ReactNode;
  isFree?: boolean;
}> = ({ title, imageUrl, children, downloadUrl, isFree }) => {
  return (
    <View>
      <ImageContainer>
        <Image src={imageUrl} />
        {isFree ? <FreeBadge>Gratuit</FreeBadge> : null}
      </ImageContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Author>
          Par <b>Anthony Cyrille</b>
        </Author>
        <Resume>{children}</Resume>
        <Button url={downloadUrl}>Télécharger</Button>
      </ContentContainer>
    </View>
  );
};

const View = styled.div`
  display: flex;
  gap: 40px;

  ${mediaQuery(size.medium)} {
    gap: 20px;
  }

  ${mediaQuery(size.small)} {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  height: 320px;

  ${mediaQuery(size.medium)} {
    height: 240px;
  }

  ${mediaQuery(size.small)} {
    height: 320px;
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

const ContentContainer = styled.div``;
const Title = styled.h3`
  font-size: ${pxToRem(32)};
  margin-block: 0;
`;
const Author = styled.h6`
  font-size: ${pxToRem(20)};
  font-weight: 300;
  text-transform: uppercase;
  color: #3e3e3e;

  margin-top: 4px;
  margin-bottom: 0;

  b {
    font-weight: 600;
  }
`;
const Resume = styled.p`
  font-size: ${pxToRem(20)};
  color: #3e3e3e;
  line-height: 1.3;
`;
