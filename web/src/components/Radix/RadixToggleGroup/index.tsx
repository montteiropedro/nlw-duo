import { SToggleItem, SToggleRoot } from "./styled";

interface ToggleGroupProps {
  selected: string[];
  onChange: (selected: string[]) => void;
}

export function RadixToggleGroup({ selected, onChange }: ToggleGroupProps) {
  return (
    <SToggleRoot type="multiple" value={selected} onValueChange={onChange}>
      <SToggleItem value="0" title="Domingo">D</SToggleItem>
      <SToggleItem value="1" title="Segunda">S</SToggleItem>
      <SToggleItem value="2" title="Terça">T</SToggleItem>
      <SToggleItem value="3" title="Quarta">Q</SToggleItem>
      <SToggleItem value="4" title="Quinta">Q</SToggleItem>
      <SToggleItem value="5" title="Sexta">S</SToggleItem>
      <SToggleItem value="6" title="Sábado">S</SToggleItem>
    </SToggleRoot>
  );
}
