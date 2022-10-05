import styled from "styled-components";
import { THEME } from "../../../../utils/theme";

import { CaretLeft, CaretRight } from "phosphor-react";

export const SCaretLeft = styled(CaretLeft)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: -3%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  color: ${THEME.COLORS.ZINC_400};
`;

export const SCaretRight = styled(CaretRight)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: -3%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  color: ${THEME.COLORS.ZINC_400};
`;
