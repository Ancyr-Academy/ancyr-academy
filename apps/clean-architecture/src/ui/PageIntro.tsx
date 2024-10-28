"use client";

import { styled } from "styled-components";
import React from "react";
import { Promotional } from "../components/Promotional";
import { Container } from "./Container";
import { pxToRem } from "./font-utils";

export const PageIntro: React.FC<{
  title: string;
  subtitle: string;
  showPromotional?: boolean;
}> = ({ title, subtitle, showPromotional }) => {
  return (
    <>
      <View>
        <Container>
          <Content>
            <IntroTitle>{title}</IntroTitle>
            <IntroText>{subtitle}</IntroText>
          </Content>
        </Container>
      </View>
      {showPromotional !== false && <Promotional />}
    </>
  );
};

const View = styled.div`
  background-color: var(--color-secondary);
  padding-top: 120px;
  padding-bottom: 40px;
`;

const Content = styled.div``;

const IntroTitle = styled.h6`
  font-size: ${pxToRem(40)};
  margin: 0;
`;

const IntroText = styled.p`
  font-size: ${pxToRem(21)};
  font-weight: 300;

  margin-block: 0;
`;
