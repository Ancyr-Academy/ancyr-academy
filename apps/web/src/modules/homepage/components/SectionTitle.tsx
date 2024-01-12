import { styled } from "styled-components";
import { pxToRem } from "../../ui/font-utils";

export const SectionTitle = styled.h6`
  font-size: ${pxToRem(21)};
  text-transform: uppercase;
  color: var(--color-primary);
  margin: 0;
`;
