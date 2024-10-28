"use client";

import React from "react";
import { styled } from "styled-components";
import { Container } from "../components/Container";
import { useDuration } from "../hooks/use-duration";
import {code, percentage} from "../../lib/app";

export const Promotion: React.FC<{}> = () => {
  const duration = useDuration();

  return (
    <View>
      <Container>
        <SubView>
          <Left>
            <Title>PROMOTION</Title>
            <Content>
              Jusqu'à <b>-{percentage * 100}%</b> avec le code <b>{code}</b>
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
                <CountdownLabel>secondes</CountdownLabel>
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
  padding-block: 40px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Left = styled.div``;

const Right = styled.div``;

const Title = styled.h2`
  color: white;
  font-size: var(--fs-medium);

  margin: 0;
`;

const Content = styled.div`
  margin-top: 4px;

  color: #fff1f1;
  font-size: var(--fs-medium);

  max-width: 350px;
`;

const Countdowns = styled.div`
  display: flex;
  gap: 20px;
`;

const Countdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90px;
  gap: 8px;
`;

const CountdownNumber = styled.div`
  font-size: var(--fs-medium);

  background-color: #fff3f3;
  color: #b40404;

  padding-inline: 20px;
  padding-block: 8px;

  border-radius: 5px;
`;

const CountdownLabel = styled.div`
  color: var(--color-secondary);
  font-size: var(--fs-small);
`;
