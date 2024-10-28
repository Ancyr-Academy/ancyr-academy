"use client";

import React from "react";
import { styled } from "styled-components";
import {useDelay, useIsPromotionActive} from "../hooks/use-delay";
import {Promotion} from "@/sections/Promotion";

export const Header: React.FC<{}> = () => {
  const seconds = useDelay();
  const isPromotionVisible = useIsPromotionActive()

  return (
    <>
      <View>
        <Content>
          <Text>
            Des Applications Robustes et Scalable avec la <br />
            <b>Clean Architecture</b>
          </Text>
        </Content>
      </View>
    { isPromotionVisible && <Promotion /> }
    </>
  );
};

const View = styled.header`
  background-image: url("/images/header.png");
  background-position: center;
  background-size: cover;

  height: 600px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const Text = styled.h1`
  margin: 0;
  line-height: 1.3;

  color: var(--header-text-color);
  font-size: var(--header-title-fs);
  text-align: center;
  font-weight: 500;

  b {
    font-weight: 800;
  }
`;
