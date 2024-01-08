import { styled } from "styled-components";
import { mediaQuery, size } from "../ui/media-query";

export const CourseList = styled.div`
  max-width: 1000px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  ${mediaQuery(size.medium)} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
