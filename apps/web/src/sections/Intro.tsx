"use client";

import { styled } from "styled-components";
import { Container } from "../ui/Container";
import { pxToRem } from "../ui/font-utils";
import { Button } from "../ui/Button";
import { mediaQuery, size } from "../ui/media-query";

export const Intro = () => {
  return (
    <View>
      <Container>
        <Content>
          <Texts>
            <IntroTitle>Ma mission ?</IntroTitle>
            <IntroText>
              Aider les développeurs à créer de meilleurs logiciels.
            </IntroText>
            <Button url="/courses">Voir les cours</Button>
          </Texts>
          <ImageContainer>
            <img
              alt="Ancyr Academy"
              src={
                "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/core/logo-alone.png"
              }
            />
          </ImageContainer>
        </Content>
      </Container>
    </View>
  );
};

const View = styled.div`
  background-color: var(--color-secondary);
  padding-block: 100px;

  ${mediaQuery(size.medium)} {
    padding-block: 80px;
  }

  ${mediaQuery(size.small)} {
    padding-block: 60px;
  }
`;

const Content = styled.div`
  gap: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mediaQuery(size.medium)} {
    gap: 40px;
  }
`;

const Texts = styled.div`
  flex: 1;
`;

const IntroTitle = styled.h6`
  font-size: ${pxToRem(21)};
  text-transform: uppercase;
  margin: 0;

  color: var(--color-primary);
`;

const IntroText = styled.p`
  font-size: ${pxToRem(40)};
  font-weight: 700;
  max-width: 600px;

  margin-bottom: 28px;
  margin-top: 12px;
`;

const ImageContainer = styled.div`
  ${mediaQuery(size.medium)} {
    order: -1;

    img {
      height: 140px;
      width: 140px;
      object-fit: cover;
    }
  }

  ${mediaQuery(size.small)} {
    display: none;
  }
`;
