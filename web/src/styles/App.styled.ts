import styled, { keyframes } from "styled-components";
import { THEME } from "../utils/theme";

export const SContainer = styled.div`
  &.outer {
    margin: 5rem auto;
    padding: 0 1rem;
    max-width: 1344px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 426px) and (max-width: 768px) {
      padding: 0 2rem;
    }

    @media (min-width: 769px) {
      padding: 0 3rem;
    }
  }
  
  &.inner {
    margin-top: 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const SLogo = styled.img`
  @media (max-width: 425px) {
    height: 120px;
  }
`;

export const STitle = styled.h1`
  margin: 3rem .5rem 0;
  font-size: 2rem;
  color: #FFF;
  font-weight: ${THEME.FONT_WEIGHT.BLACK};

  @media (min-width: 376px) and (max-width: 425px) {
    font-size: 2.25rem;
  }

  @media (min-width: 426px) {
    margin: 5rem .5rem 0;
    font-size: 3.75rem;
  }
`;

const pulse = keyframes`
  50% {
    opacity: .5;
  }
`;

export const SPulseAnimation = styled.span`
  background: linear-gradient(86deg, #9572FC, #E8355F, #E88C4E);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

export const SNoGamesMessage = styled.strong`
  margin: 2rem 0 6rem;
  display: block;
  color: ${THEME.COLORS.ZINC_400};
  font-size: ${THEME.FONT_SIZE.MD};
  font-weight: ${THEME.FONT_WEIGHT.BOLD};
  text-align: center;
  
  @media (min-width: 376px) {
    font-size: ${THEME.FONT_SIZE.LG};
  }
`;
