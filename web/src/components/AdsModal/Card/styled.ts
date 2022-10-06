import { X } from "phosphor-react";
import styled, { keyframes } from "styled-components";
import { THEME } from "../../../utils/theme";

interface ICard {
  $display?: boolean;
}

interface ITextLabel {
  size?: string;
  color?: string;
  weight?: number;
}

export const SCard = styled.div<ICard>`
  position: relative;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  border-radius: ${THEME.BORDER.ROUNDED_LG};
  background-color: ${THEME.COLORS.ZINC_900};
`;

export const SCardInfo = styled.div`
  &.front-info {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  }

  &.back-info {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    align-items: center;
    text-align: center;
  }
`;

export const SLabel = styled.span<ITextLabel>`
  &.front-info {
    color: ${THEME.COLORS.ZINC_400};
  }

  &.back-info {
    color: #FFF;
    font-size: ${props => props.size || THEME.FONT_SIZE.LG};
    font-weight: ${props => props.weight || THEME.FONT_WEIGHT.BLACK};
  }
`;

export const SText = styled.span<ITextLabel>`
  &.front-info {
    color: ${props => props.color || "#FFF"};
    font-size: ${THEME.FONT_SIZE.SM};
    font-weight: ${THEME.FONT_WEIGHT.BOLD};
  }

  &.back-info {
    color: ${THEME.COLORS.ZINC_400};
    font-size: ${THEME.FONT_SIZE.MD};
    font-weight: 400;
  }

  &>span {
    color: ${THEME.COLORS.ZINC_400}
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SDiscordInfo = styled(SCard)`
  position: absolute;
  inset: 0;
  padding: 1.5rem;

  display: none;
  align-items: center;
  justify-content: space-evenly;

  ${props => props.$display && "display: flex; animation: ${fadeIn} .5s;"};
`;

export const SButton = styled.button`
  cursor: pointer;
  padding: .5rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  color: #FFF;
  font-size: ${THEME.FONT_SIZE.MD};
  font-weight: ${THEME.FONT_WEIGHT.SEMI_BOLD};
  border-radius: ${THEME.BORDER.ROUNDED};
  background-color: ${THEME.COLORS.PRIMARY};
  transition: all ease-in-out 350ms;
  
  &:hover {
    background-color: ${THEME.COLORS.PRIMARY_HOVER};
  }
`;

export const SDiscordButton = styled.button`
  cursor: pointer;
  position: relative;
  margin-top: .3rem;
  padding: .75rem 1rem;
  display: flex;
  align-self: stretch;
  align-content: center;
  justify-content: center;
  color: ${THEME.COLORS.ZINC_300};
  font-size: ${THEME.FONT_SIZE.MD};
  border-radius: ${THEME.BORDER.ROUNDED};
  background-color: ${THEME.COLORS.SHAPE};
  
  transition: all ease-in-out 350ms;

  &:hover {
    background-color: ${THEME.COLORS.ZINC_600};
  }

  &>span {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const SCloseButton = styled(X)`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  color: ${THEME.COLORS.ZINC_500}
`;
