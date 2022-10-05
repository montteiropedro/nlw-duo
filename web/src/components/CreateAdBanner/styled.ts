import styled, { keyframes } from "styled-components";
import { THEME } from "../../utils/theme";
import { SignOut } from "phosphor-react";

const flow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const SBanner = styled.div`
  margin: .5rem;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  border-radius: .5rem;

  //  Border Gradient
  background:
  linear-gradient(${THEME.COLORS.SHAPE}, ${THEME.COLORS.SHAPE}) padding-box,
  linear-gradient(86deg, #9572FC, #E8355F, #E88C4E) border-box;
  background-size: 150%;
  border-top: 4px solid transparent;
  animation: ${flow} 5s ease infinite alternate;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const SHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  text-align: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

export const STitle = styled.strong`
  display: block;
  color: #FFF;
  font-size: ${THEME.FONT_SIZE.LG};
  font-weight: ${THEME.FONT_WEIGHT.BLACK};
`;

export const SText = styled.span`
  display: block;
  color: ${THEME.COLORS.ZINC_400};
`;

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

export const SLoginButton = styled.button`
  cursor: pointer;
  padding: .75rem 1rem;
  display: flex;
  align-items: center;
  gap: .75rem;
  color: #FFF;
  font-size: ${THEME.FONT_SIZE.MD};
  font-weight: ${THEME.FONT_WEIGHT.SEMI_BOLD};
  border-radius: ${THEME.BORDER.ROUNDED_MD};
  background-color: ${THEME.COLORS.PRIMARY};
  transition: all ease-in-out 350ms;

  &:hover {
    background-color: ${THEME.COLORS.PRIMARY_HOVER};
  }
`;

export const SLogoutButton = styled.button`
  cursor: pointer;
  padding: 0 .15rem 0 1.25rem;
  display: flex;
  align-self: stretch;
  align-items: center;
  gap: .75rem;
  color: #FFF;
  font-size: ${THEME.FONT_SIZE.MD};
  font-weight: ${THEME.FONT_WEIGHT.SEMI_BOLD};
  border-radius: 
    ${THEME.BORDER.ROUNDED_MD} 30px 30px ${THEME.BORDER.ROUNDED_MD};

  background-color: ${THEME.COLORS.ZINC_500};
  transition: all ease-in-out 350ms;

  &:hover {
    background-color: ${THEME.COLORS.RED_400};
  }
`;

export const SSignOutIcon = styled(SignOut)`
  transform: rotate(180deg);
`;

export const SUsername = styled.span`
  color: #FFF;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SUserAvatar = styled.img`
  width: 42px;
  height: 42px;
  clip-path: circle(50% at 50% 50%);
`;
