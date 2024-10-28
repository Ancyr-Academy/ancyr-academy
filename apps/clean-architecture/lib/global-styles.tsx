"use client";

import { createGlobalStyle } from "styled-components";

export const mediaQuery = (maxWidth: number) =>
  `@media screen and (max-width: ${maxWidth}px), print`;

export const breakpoints = {
  small: 1048,
  phone: 612,
};

export const GlobalStyles = createGlobalStyle`
:root {
  --fs-very-big: 68px;
  --fs-big: 42px;
  --fs-medium: 32px;
  --fs-default: 24px;
  --fs-small: 20px;

  --color-primary: #0D5264;
  --color-secondary: #FFFFFF;
  --color-text-1: #1A2C2A;

  --button-background-color: var(--color-primary);
  --button-text-color: var(--color-secondary);
  --header-text-color: var(--color-secondary);

  --header-title-fs: var(--fs-very-big);

  --early-bird-bg-color: var(--color-primary);
  --early-bird-text-color: white;
  --early-bird-title-fs: var(--fs-big);
  --early-bird-text-fs: var(--fs-medium);

  ${mediaQuery(breakpoints.phone)} {
    --fs-very-big: 48px;
    --fs-big: 36px;
    --fs-medium: 28px;
  }
}
`;
