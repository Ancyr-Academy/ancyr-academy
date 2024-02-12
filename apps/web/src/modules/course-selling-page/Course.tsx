import React from "react";
import { styled } from "styled-components";
import { pxToRem } from "../ui/font-utils";
import { Button } from "../ui/Button";
import { mediaQuery, size } from "../ui/media-query";
import { getSalesDiscount } from "../promotion";
import { useIsDiscountActive } from "../promotion/use-is-discount-active";

export const Course: React.FC<{
  title: string;
  price: number;
  imageUrl: string;
  status:
    | {
        type: "available";
        url: string;
      }
    | {
        type: "soon";
      }
    | {
        type: "unavailable";
      };
  isHot?: boolean;
  children: React.ReactNode;
}> = ({ title, children, price, imageUrl, status, isHot }) => {
  const isDiscount = useIsDiscountActive();
  const code = getSalesDiscount().code;

  let finalUrl: string | null = null;

  if (status.type === "available") {
    finalUrl = status.url;
    if (isDiscount) {
      finalUrl = `${status.url}?coupon_code=${code}`;
    }
  }

  return (
    <View>
      {isHot ? <HotBadge>Hot</HotBadge> : null}
      <HeadImage src={imageUrl} />
      <Content>
        <Title>{title}</Title>
        <Text>{children}</Text>
        {status.type === "available" && (
          <>
            {isDiscount ? (
              <>
                <OldPricing>
                  <s>{price}€ TTC</s>
                </OldPricing>
                <Pricing>
                  {price - price * getSalesDiscount().percentage}€ TTC
                </Pricing>
              </>
            ) : (
              <Pricing>{price}€ TTC</Pricing>
            )}
          </>
        )}
      </Content>

      {status.type === "available" && (
        <Button url={finalUrl!} wide>
          Découvrir
        </Button>
      )}
      {status.type === "soon" && (
        <Button disabled tint="secondary" wide>
          Bientôt disponible
        </Button>
      )}
      {status.type === "unavailable" && (
        <Button disabled tint="tertiary" wide>
          Planifié
        </Button>
      )}
    </View>
  );
};

const View = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  text-decoration: none;
  color: #3e3e3e;

  border: 1px solid #c0c0c0;
  border-radius: 10px;
`;

const HeadImage = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  flex: 1;

  padding-inline: 40px;
  padding-block: 20px;

  ${mediaQuery(size.medium)} {
    padding-inline: 24px;
    padding-block: 12px;
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: ${pxToRem(21)};
  color: var(--color-primary);
`;

const Text = styled.p`
  line-height: 1.2;
  font-size: ${pxToRem(21)};
`;

const OldPricing = styled.p`
  text-align: right;
  font-size: ${pxToRem(21)};
  font-weight: 300;
  color: #a0a0a0;
  margin-block: 0;
`;
const Pricing = styled.p`
  text-align: right;
  font-size: ${pxToRem(24)};
  font-weight: 700;

  margin-block: 0;
`;

const HotBadge = styled.div`
  @keyframes text-wizz {
    0%,
    5%,
    50%,
    100% {
      transform: translateX(0);
    }
    10% {
      transform: translateX(-10px); /* shake to the left */
    }
    20% {
      transform: translateX(10px); /* shake to the right */
    }
    30% {
      transform: translateX(-5px); /* shake to the left */
    }
    40% {
      transform: translateX(5px); /* shake to the right */
    }
  }

  position: absolute;
  top: -10px;
  right: 20px;

  background-color: #ec420e;
  color: white;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 80px;

  border-radius: 4px;

  text-transform: uppercase;
  font-size: ${pxToRem(20)};
  animation: text-wizz 1.2s infinite; /* Apply the animation */
`;
