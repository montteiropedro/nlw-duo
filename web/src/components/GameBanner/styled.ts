import styled from "styled-components";
import { THEME } from "../../utils/theme";
import * as Dialog from "@radix-ui/react-dialog"

export const SDialogTrigger = styled(Dialog.Trigger)`
  cursor: pointer;
  position: relative;
  color: #FFF;
  border-radius: ${THEME.BORDER.ROUNDED_LG};
  text-align: left;
  overflow: hidden;
  outline: none;
`;

export const SImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const SGradient = styled.div`
  position: absolute;
  bottom: 0;
  padding: 4rem 1rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .25rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90) 67.08%);
`;

export const STitle = styled.strong`
  color: #FFF;
  font-weight: ${THEME.FONT_WEIGHT.BOLD};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const SText = styled.strong`
  color: #D4D4D8;
  font-size: ${THEME.FONT_SIZE.SM};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
