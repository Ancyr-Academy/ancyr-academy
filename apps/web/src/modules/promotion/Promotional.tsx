"use client";

import { styled } from "styled-components";
import { Container } from "../ui/Container";
import { pxToRem } from "../ui/font-utils";
import { useIsDiscountActive } from "./use-is-discount-active";
import { useCountdown } from "./use-countdown";
import { useDuration } from "./use-duration";
import { salesDiscount } from "./index";

export const Promotional = () => {
  const isPromotionActive = useIsDiscountActive();
  const duration = useDuration();

  if (!isPromotionActive) {
    return null;
  }

  const percentage = salesDiscount.percentage;
  const code = salesDiscount.code;

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
  padding-block: 28px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
