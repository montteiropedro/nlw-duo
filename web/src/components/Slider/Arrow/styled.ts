import styled from "styled-components";
import { THEME } from "../../../utils/theme";

import { CaretLeft, CaretRight } from "phosphor-react";

export const SCaretLeft = styled(CaretLeft)`
  display: none;

  @media (min-width: 541px) {
    cursor: pointer;
    margin-right: 1.5rem;
    display: block;
    color: ${THEME.COLORS.ZINC_400};
  }

  &.arrow--disabled {
    color: ${THEME.COLORS.ZINC_600}
  }
`;

export const SCaretRight = styled(CaretRight)`
  display: none;

  @media (min-width: 541px) {
    cursor: pointer;
    margin-left: 1.5rem;
    display: block;
    color: ${THEME.COLORS.ZINC_400};

    &.arrow--disabled {
     color: ${THEME.COLORS.ZINC_600}
    }
  }
`;
