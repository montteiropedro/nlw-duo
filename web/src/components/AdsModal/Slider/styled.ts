import styled from "styled-components";
import { THEME } from "../../../utils/theme";

export const SContainer = styled.div`
  &.navigation--wrapper {
    display: flex;
    align-items: center;

    @media (min-width: 541px) {
      margin-inline: -2.5rem;
    }
  }
`;

export const SSlider = styled.div`
  display: flex;
  width: 100%;
  border-radius: ${THEME.BORDER.ROUNDED_LG};
  overflow: hidden;

  @media (min-width: 541px) {
    width: calc(100% - 6rem);
  }
`;
