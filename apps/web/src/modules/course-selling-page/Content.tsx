import { styled } from "styled-components";
import { pxToRem } from "../ui/font-utils";

export const Content = styled.div`
  & > section {
    margin-bottom: 80px;

    & > h2 {
      font-size: ${pxToRem(32)};
      font-weight: 700;
      text-transform: uppercase;

      color: var(--color-primary);
    }

    & > p {
      font-size: ${pxToRem(21)};
      line-height: 1.5;
    }

    & > ul {
      li {
        font-size: ${pxToRem(21)};
        line-height: 1.5;
      }
    }
  }

  .companies {
    margin-block: 40px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;

    gap: 40px;

    img {
      object-fit: contain;
    }
  }
`;
