import styled from "styled-components";
import React from "react";
import { pxToRem } from "./font-utils";

export const Button: React.FC<{ url: string; children: string }> = ({
  url,
  children,
}) => {
  return <View href={url}>{children}</View>;
};

const View = styled.a`
  display: inline-block;
  text-decoration: none;

  font-size: ${pxToRem(20)};
  background-color: var(--color-primary);
  color: white;

  border: none;
  border-radius: 5px;

  padding-inline: 40px;
  padding-block: 12px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.2);
  }
`;
