import styled from "styled-components";
import { THEME } from "../../utils/theme";

import * as Dialog from "@radix-ui/react-dialog";

export const SHeader = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${THEME.BORDER.ROUNDED_LG};
  background-color: ${THEME.COLORS.ZINC_900};

  &>div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .25rem;
  }

  @media (min-width: 768px) {
    margin-inline: .5rem;
  }
`;

export const SSubtitle = styled.span`
  color: ${THEME.COLORS.ZINC_400};
  font-size: ${THEME.FONT_SIZE.MD};
  font-weight: ${THEME.FONT_WEIGHT.SEMI_BOLD};
`;

export const SBanner = styled.img`
  display: none;

  @media (min-width: 481px) {
    display: block;
    margin-right: 2rem;
    height: 84px;
    border-radius: ${THEME.BORDER.ROUNDED_LG};
  }
`;

export const SNoAdsMessage = styled.div`
  margin: 6rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: ${THEME.COLORS.ZINC_400};
  font-size: ${THEME.FONT_SIZE.MD};
  font-weight: ${THEME.FONT_WEIGHT.BOLD};
  text-align: center;

  @media (min-width: 376px) {
    font-size: ${THEME.FONT_SIZE.LG};
  }
`;

export const SFooter = styled.footer`
display: flex;
justify-content: flex-end;
gap: 1rem;
`;

// Radix UI Dialog Components

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
  padding: 1.5rem 1rem;
  width: min(98vw, 1440px);
  max-height: 98vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #FFF;
  border-radius: ${THEME.BORDER.ROUNDED_LG};
  background-color: ${THEME.COLORS.SHAPE};
  overflow-y: scroll;

  @media (min-width: 541px) {
    padding: 2rem 2.5rem;
    overflow-y: scroll;
  }
`;

export const SDialogTitle = styled(Dialog.Title)`
  text-align: center;
  font-size: ${THEME.FONT_SIZE.LG};
  font-weight: ${THEME.FONT_WEIGHT.BLACK};
  line-height: 2.25rem;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (min-width: 481px) {
    font-size: 1.875rem;
  }
`;

export const SDialogClose = styled(Dialog.Close)`
  cursor: pointer;
  margin-right: .5rem;
  padding: .75rem 1.25rem;
  align-self: center;
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
