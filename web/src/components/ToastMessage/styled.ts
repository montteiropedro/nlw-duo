import styled, { css, keyframes } from "styled-components";
import { THEME } from "../../utils/theme";

interface IToastMessage {
  $display: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const showToastMessage = css`
  visibility: visible;
  animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 2.5s;
`;

export const SToastMessage = styled.div<IToastMessage>`
  position: absolute;
  inset: 0;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${THEME.COLORS.ZINC_900};
  border-radius: ${THEME.BORDER.ROUNDED_LG};
  background-color: ${THEME.COLORS.EMERALD_400};

  ${props => props.$display && showToastMessage};
`;
