import styled from "styled-components";
import React from "react";
import { pxToRem } from "./font-utils";

type Size = "normal" | "big";

export const Button: React.FC<{
  url: string;
  children: string;
  wide?: boolean;
  size?: "normal" | "big";
}> = ({ url, children, wide, size }) => {
  return (
    <View $size={size} $wide={wide} href={url}>
      {children}
    </View>
  );
};

const View = styled.a<{ $wide?: boolean; $size?: Size }>`
  display: inline-block;
  text-decoration: none;

  text-align: center;
  font-size: ${pxToRem(20)};
  background-color: var(--color-primary);
  color: white;

  border: none;
  border-radius: 5px;

  padding-inline: 40px;
  padding-block: 16px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.2);
  }

  ${(props) => props.$wide && `display: block;`}
  ${(props) =>
    props.$size === "big" &&
    `
  font-size: ${pxToRem(20)};
  padding-block: 20px;
  `}
`;
