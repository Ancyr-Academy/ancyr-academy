export const size = {
  small: 600,
  medium: 900,
  large: 1320,
};

export const mediaQuery = (maxWidth: number) =>
  `@media screen and (max-width: ${maxWidth}px), print`;
