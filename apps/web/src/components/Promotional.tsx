"use client";

import React from "react";
import { styled } from "styled-components";
import { Container } from "../ui/Container";
import { pxToRem } from "../ui/font-utils";
import { mediaQuery, size } from "../ui/media-query";
import { useDiscountDuration } from "ui";

export const Promotional = () => {
  const { duration, discount } = useDiscountDuration();

  if (duration.total === 0) {
    return <></>;
  }

  return (
    <View>
      <Container>
        <SubView>
          <Left>
            <Title>EN COURS</Title>
            <Content>
              Jusqu'à <b>-{discount!.percentage * 100}%</b> sur les{" "}
              <b>cours en e-learning</b> avec le code <b>{discount!.code}</b>
            </Content>
          </Left>
          <Right>
            <Countdowns>
              <Countdown>
                <CountdownNumber>{duration.pad(duration.days)}</CountdownNumber>
                <CountdownLabel>jours</CountdownLabel>
              </Countdown>
              <Countdown>
                <CountdownNumber>
                  {duration.pad(duration.hours)}
                </CountdownNumber>
                <CountdownLabel>heures</CountdownLabel>
              </Countdown>
              <Countdown>
                <CountdownNumber>
                  {duration.pad(duration.minutes)}
                </CountdownNumber>
                <CountdownLabel>minutes</CountdownLabel>
              </Countdown>
              <Countdown>
                <CountdownNumber>
                  {duration.pad(duration.seconds)}
                </CountdownNumber>
                <CountdownLabel>sec</CountdownLabel>
              </Countdown>
            </Countdowns>
          </Right>
        </SubView>
      </Container>
    </View>
  );
};

const View = styled.div`
  background-color: #b40404;
`;

const SubView = styled.div`
  padding-block: 28px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${mediaQuery(size.medium)} {
    flex-direction: column;
    align-items: initial;
    justify-content: initial;

    gap: 20px;
  }
`;

const Left = styled.div``;
const Right = styled.div``;

const Title = styled.h2`
  color: white;
  font-size: ${pxToRem(32)};
  margin: 0;
`;

const Content = styled.div`
  margin-top: 4px;

  color: #fff1f1;
  font-size: ${pxToRem(24)};

  max-width: 450px;
`;

const Countdowns = styled.div`
  display: flex;
  gap: 5px;
`;

const Countdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90px;
  gap: 8px;

  ${mediaQuery(size.medium)} {
    width: fit-content;
  }
`;

const CountdownNumber = styled.div`
  font-size: ${pxToRem(24)};
  font-weight: 600;

  background-color: #fff3f3;
  color: #810d0d;

  padding-inline: 20px;
  padding-block: 8px;

  border-radius: 5px;
`;

const CountdownLabel = styled.div`
  color: var(--color-secondary);
  font-size: ${pxToRem(18)};
`;
