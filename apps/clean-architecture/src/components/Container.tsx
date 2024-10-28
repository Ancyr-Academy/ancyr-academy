import { styled } from "styled-components";
import { breakpoints, mediaQuery } from "../../lib/global-styles";

type Variant = "normal" | "large";

export const Container = styled.div<{ variant?: Variant }>`
  max-width: ${(props) => (props.variant === "large" ? "1200px" : "1000px")};
  margin: 0 auto;

  padding-inline: 40px;

  ${mediaQuery(breakpoints.phone)} {
    padding-inline: 20px;
  }
`;
