import styled from "styled-components";
import { mediaQuery, size } from "../ui/media-query";

export const ReviewList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  ${mediaQuery(size.medium)} {
    gap: 8px;
  }

  ${mediaQuery(size.small)} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
