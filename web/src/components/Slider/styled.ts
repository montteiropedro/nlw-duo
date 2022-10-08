import { ArrowCircleLeft } from "phosphor-react";
import styled from "styled-components";
import { THEME } from "../../utils/theme";

export const SContainer = styled.div`
  &.navigation--wrapper {
    display: flex;
    align-items: center;
  }
`;

export const SSlider = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  border-radius: ${THEME.BORDER.ROUNDED_LG};

  @media (min-width: 426px) {
    width: calc(100% - 9rem);
  }
`;

export const SReturnStart = styled(ArrowCircleLeft)`
`;
