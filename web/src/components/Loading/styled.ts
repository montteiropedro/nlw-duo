import styled, { css, keyframes } from "styled-components";
import { THEME } from "../../utils/theme";

import { LoadingProps } from ".";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SLoading = styled.div<LoadingProps>`
  ${props => props.margin && css<LoadingProps>`
    margin: ${props => props.margin};
  `}

  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 3px solid ${THEME.COLORS.PRIMARY};
    border-color:
      ${THEME.COLORS.PRIMARY} ${THEME.COLORS.PRIMARY} ${THEME.COLORS.PRIMARY} transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
