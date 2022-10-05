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

    @media (min-width: 481px) {
      padding: 0 2.5rem;
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

export const STitle = styled.h1`
  margin: 5rem .5rem 0;
  font-size: 3rem;
  line-height: 1;
  color: #FFF;
  font-weight: ${THEME.FONT_WEIGHT.BLACK};

  @media (min-width: 480px) {
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
  margin: 6rem 0;
  display: block;
  color: ${THEME.COLORS.ZINC_400};
  font-size: 1.875rem;
  font-weight: ${THEME.FONT_WEIGHT.BOLD};
  line-height: 2.25rem;
  text-align: center;
`;
