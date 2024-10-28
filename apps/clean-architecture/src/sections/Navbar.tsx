"use client";

import React from "react";
import { styled } from "styled-components";
import { getCourseURL } from "../../lib/app";
import { breakpoints, mediaQuery } from "../../lib/global-styles";

export const Navbar: React.FC<{}> = () => {
  return (
    <View>
      <Logo>
        <img src="/images/logo.png" alt="Logo" />
      </Logo>
      <BuyButton href={getCourseURL()}>J'accède à la formation</BuyButton>
    </View>
  );
};

export const View = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9;

  background-color: white;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-block: 12px;
  padding-inline: 24px;

  gap: 12px;
`;
export const Logo = styled.div`
  img {
    height: 40px;
  }

  ${mediaQuery(breakpoints.phone)} {
    img {
      height: 32px;
    }
  }
`;
export const BuyButton = styled.a`
  display: block;
  text-decoration: none;

  background-color: var(--button-background-color);
  color: var(--button-text-color);

  padding-block: 12px;
  padding-inline: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: var(--fs-small);

  transition: all 0.2s;

  &:hover {
    filter: brightness(1.1);
  }

  ${mediaQuery(breakpoints.phone)} {
    display: none;
  }
`;
