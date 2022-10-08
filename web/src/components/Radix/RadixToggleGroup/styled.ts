import styled from "styled-components";
import { THEME } from "../../../utils/theme";

import * as ToggleGroup from "@radix-ui/react-toggle-group";

// Radix UI ToggleGroup Components

export const SToggleRoot = styled(ToggleGroup.Root)`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-flow: row;
  justify-content: flex-start;
  gap: .25rem;
`;

export const SToggleItem = styled(ToggleGroup.Item)`
  cursor: pointer;
  height: 2rem;
  width: 100%;
  color: #FFF;
  font-weight: ${THEME.FONT_WEIGHT.BOLD};
  border-radius: ${THEME.BORDER.ROUNDED};

  &[data-state="on"] {
    background-color: ${THEME.COLORS.PRIMARY}
  }

  &[data-state="off"] {
    background-color: ${THEME.COLORS.ZINC_900}
  }

  @media (min-width: 426px) {
    width: 2rem;
  }
`;
