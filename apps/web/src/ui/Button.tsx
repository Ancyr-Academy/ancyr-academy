import { styled } from "styled-components";
import React from "react";
import { pxToRem } from "./font-utils";

type Size = "normal" | "big";
type Tint = "primary" | "secondary" | "tertiary";

export const Button: React.FC<{
  disabled?: boolean;
  url?: string;
  children: string;
  wide?: boolean;
  tint?: Tint;
  size?: Size;
}> = ({ url, children, wide, size, disabled, tint }) => {
  if (disabled) {
    return (
      <View $disabled $size={size} $tint={tint} $wide={wide} as="div">
        {children}
      </View>
    );
  }

  return (
    <View $size={size} $tint={tint} $wide={wide} href={url}>
      {children}
    </View>
  );
};

const View = styled.a<{
  $wide?: boolean;
  $size?: Size;
  $disabled?: boolean;
  $tint?: Tint;
}>`
  display: inline-block;
  text-decoration: none;

  text-align: center;
  font-size: ${pxToRem(20)};
  color: white;

  border: none;
  border-radius: 5px;

  padding-inline: 40px;
  padding-block: 16px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.2);
  }

  ${(props) => {
    switch (props.$tint) {
      case "secondary":
        return `
        background-color: var(--color-button-secondary);
      `;
      case "tertiary":
        return `
        background-color: var(--color-button-tertiary);
      `;
      default:
        return `
        background-color: var(--color-primary);
      `;
    }
  }}

  ${(props) => props.$wide && `display: block;`}
  ${(props) =>
    props.$size === "big" &&
    `
  font-size: ${pxToRem(20)};
  padding-block: 20px;
  `}

  ${(props) =>
    props.$disabled === true &&
    `
    opacity: 0.6;
    &:hover {
      filter: none;
    }
  `}
`;
