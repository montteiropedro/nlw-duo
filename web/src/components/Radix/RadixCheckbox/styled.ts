import styled from "styled-components";
import { THEME } from "../../../utils/theme";

import * as Checkbox from "@radix-ui/react-checkbox";

export const SCheckboxRoot = styled(Checkbox.Root)`
  padding: .25rem;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: ${THEME.BORDER.ROUNDED_SM};
  background-color: ${THEME.COLORS.ZINC_900};
`;
