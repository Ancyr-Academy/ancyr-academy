import { styled } from "styled-components";
import { mediaQuery, size } from "../ui/media-query";

export const CourseList = styled.div`
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  ${mediaQuery(size.large)} {
    gap: 40px;
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQuery(size.medium)} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
