import { styled } from "styled-components";
import { mediaQuery, size } from "./media-query";

export const Container = styled.div`
  max-width: var(--container-size);
  margin: 0 auto;

  padding-inline: 40px;

  ${mediaQuery(size.small)} {
    padding-inline: 16px;
  }
`;
