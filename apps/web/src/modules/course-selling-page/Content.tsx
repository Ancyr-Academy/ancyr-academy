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
      font-size: ${pxToRem(22)};
      line-height: 1.5;
      font-weight: 300;

      b {
        font-weight: 600;
      }

      & > i {
        color: #5c5c5c;
      }
    }

    & > ul {
      list-style-type: none;
      padding-inline-start: 0;

      li {
        svg {
          margin-right: 12px;
          fill: var(--color-primary);
          font-size: ${pxToRem(36)};
        }

        display: flex;
        align-items: center;

        font-size: ${pxToRem(22)};
        line-height: 1;
        font-weight: 300;

        padding-block: 8px;

        b {
          font-weight: 600;
        }
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
