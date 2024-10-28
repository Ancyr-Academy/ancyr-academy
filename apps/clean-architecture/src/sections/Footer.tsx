"use client";

import React from "react";
import { styled } from "styled-components";
import { Container } from "../components/Container";
import { Paragraph } from "../components/Typography";

export const Footer: React.FC<{}> = () => {
  return (
    <View>
      <Container>
        <Paragraph>
          Copyright 2023 - Anthony Benkhebbab EI
          <br />
          SIRET 839 317 971 - APE 6201Z
          <br />9 Rue des Colonnes - 75002 Paris
        </Paragraph>
      </Container>
    </View>
  );
};

const View = styled.div`
  border-top: 1px solid #aaa;
  ${Paragraph} {
    font-size: 16px;
    line-height: 1.5;
  }
`;
