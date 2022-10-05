import styled from "styled-components";
import { THEME } from "../../../utils/theme";

import * as Select from "@radix-ui/react-select";

// Radix UI Select Components

export const SSelectTrigger = styled(Select.Trigger)`
  cursor: pointer;
  padding: .85rem 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  color: #FFF;
  font-size: ${THEME.FONT_SIZE.SM};
  border-radius: ${THEME.BORDER.ROUNDED};
  background-color: ${THEME.COLORS.ZINC_900};
  outline: none;

  &[data-placeholder] {
    color: ${THEME.COLORS.ZINC_500}
  }
`;

export const SScrollUpButton = styled(Select.ScrollUpButton)`
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SScrollDownButton = styled(Select.ScrollDownButton)`
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SSelectContent = styled(Select.Content)`
  bottom: 10;
  left: 0;
  padding: .75rem .5rem;
  width: 100%;
  color: #FFF;
  font-size: ${THEME.FONT_SIZE.SM};
  text-align: left;
  border-radius: ${THEME.BORDER.ROUNDED};
  background-color: ${THEME.COLORS.ZINC_900};
  box-shadow: 0 0 5px ${THEME.COLORS.PRIMARY_SHADOW};
  overflow: hidden;

  transition: all ease-in-out 350ms;
`;

export const SSelectItem = styled(Select.Item)`
  cursor: pointer;
  padding: .25rem .5rem;
  font-size: ${THEME.FONT_SIZE.SM};
  border-radius: ${THEME.BORDER.ROUNDED};
  outline: none;

  &[data-highlighted] {
    background-color: ${THEME.COLORS.PRIMARY_SHADOW};
  }
`;
