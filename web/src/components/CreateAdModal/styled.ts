import styled from "styled-components";
import { THEME } from "../../utils/theme";

import * as Dialog from "@radix-ui/react-dialog";

interface Props {
  marginB?: string;
  direction?: string;
  gridCols?: string;
  gap?: string;
}

export const SDiv = styled.div<Props>`
  &.flex {
    margin-bottom: ${props => props.marginB || "1rem"};
    display: flex;
    flex-direction: ${props => props.direction || "column"};
    gap: ${props => props.gap};
  }

  &.grid {
    margin-bottom: ${props => props.marginB || "1rem"};
    display: grid;
    grid-template-columns: repeat(${props => props.gridCols || "2"}, minmax(0, 1fr));
    gap: ${props => props.gap};
  }
`;

export const SLabel = styled.label<Props>`
  &.font-semibold {
    font-weight: ${THEME.FONT_WEIGHT.SEMI_BOLD};
  }

  &.discord-label {
    cursor: pointer;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: ${props => props.direction || "column"};
    align-items: center;
    gap: ${props => props.gap};
    font-size: ${THEME.FONT_SIZE.SM};
  }
`;

export const SInput = styled.input`
  padding: .85rem 1rem;
  background-color: ${THEME.COLORS.ZINC_900};
  color: #FFF;
  font-size: ${THEME.FONT_SIZE.SM};
  border-radius: ${THEME.BORDER.ROUNDED};
  outline: none;
  transition: all ease-in-out 50000s 1s;

  &::placeholder {
    color: ${THEME.COLORS.ZINC_500};
  };

  &::-webkit-outer-spin-button, 
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &[type="time"] {
    font-size: ${THEME.FONT_SIZE.XS};
    padding-inline: .5rem;
    
    &::-webkit-calendar-picker-indicator {
      margin: 0;
      padding: 0;
      filter: invert(30%) sepia(87%) saturate(1233%) hue-rotate(235deg) brightness(113%) contrast(93%);
    }
  }
`;

export const SFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const SButton = styled.button`
  cursor: pointer;
  padding: .75rem 1.25rem;
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

export const SFormError = styled.span`
  color: ${THEME.COLORS.RED_400};
  font-size: ${THEME.FONT_SIZE.XS};
  line-height: 1rem;
`;

// Radix UI Dialog Components

export const SDialogTrigger = styled(Dialog.Trigger)`
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

  white-space: nowrap;
  
  &:hover {
    background-color: ${THEME.COLORS.PRIMARY_HOVER};
  }
`;

export const SDialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.6);
`;

export const SDialogContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 2.5rem;
  width: 488px;
  max-height: 98vh;
  color: #FFF;
  border-radius: ${THEME.BORDER.ROUNDED_LG};
  background-color: ${THEME.COLORS.SHAPE};
  overflow-y: scroll;
`;

export const SDialogTitle = styled(Dialog.Title)`
  margin: 1.5rem 0 2rem;
  font-size: 1.875rem;
  font-weight: ${THEME.FONT_WEIGHT.BLACK};
  line-height: 2.25rem;
`;

export const SDialogClose = styled(Dialog.Close)`
  cursor: pointer;
  padding: .75rem 1.25rem;
  color: #FFF;
  font-size: ${THEME.FONT_SIZE.MD};
  font-weight: ${THEME.FONT_WEIGHT.SEMI_BOLD};
  border-radius: ${THEME.BORDER.ROUNDED_MD};
  background-color: ${THEME.COLORS.ZINC_500};
  transition: all ease-in-out 350ms;
  &:hover {
    background-color: ${THEME.COLORS.ZINC_600};
  }
`;
