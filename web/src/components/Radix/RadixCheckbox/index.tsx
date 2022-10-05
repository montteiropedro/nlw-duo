import * as Checkbox from "@radix-ui/react-checkbox";

import { Check } from "phosphor-react";
import { SCheckboxRoot } from "./styled";
import { THEME } from "../../../utils/theme";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function RadixCheckbox({ checked, onChange }: CheckboxProps) {
  return (
    <SCheckboxRoot
      checked={checked}
      onCheckedChange={onChange}
    >
      <Checkbox.Indicator>
        <Check size={16} color={THEME.COLORS.EMERALD_400} />
      </Checkbox.Indicator>
    </SCheckboxRoot>
  );
}
