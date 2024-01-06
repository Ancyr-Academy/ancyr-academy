"use client";

import styled from "styled-components";
import Image from "next/image";
import React from "react";
import LogoAlone from "../../../assets/logo-alone.png";
import { Container } from "./Container";
import { pxToRem } from "./font-utils";

export const PageIntro: React.FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => {
  return (
    <View>
      <Container>
        <Content>
          <IntroTitle>{title}</IntroTitle>
          <IntroText>{subtitle}</IntroText>
        </Content>
      </Container>
    </View>
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
  font-size: ${pxToRem(24)};
  font-weight: 300;

  margin-block: 0;
`;
