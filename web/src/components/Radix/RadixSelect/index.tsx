import * as Select from "@radix-ui/react-select";
import { CaretDown, CaretUp } from "phosphor-react";
import { SScrollDownButton, SScrollUpButton, SSelectContent, SSelectItem, SSelectTrigger } from "./styled";

import { ModalGameProps } from "../../CreateAdModal";

interface SelectProps {
  games: ModalGameProps[];
  onChange: (value: string) => void;
}

export function RadixSelect({ games, onChange }: SelectProps) {
  return (
    <Select.Root name="gameId" onValueChange={onChange}>
      <SSelectTrigger>
        <Select.Value placeholder="Selecione o game que deseja jogar" />
        <Select.Icon>
          <CaretDown size={15} />
        </Select.Icon>
      </SSelectTrigger>

      <Select.Portal>
        <SSelectContent >
          <SScrollUpButton>
            <CaretUp size={15} />
          </SScrollUpButton>
          
          <Select.Viewport>
            {games.map(game => (
              <SSelectItem key={game.id} value={game.id}>
                <Select.ItemText>{game.title}</Select.ItemText>
              </SSelectItem>
            ))}
          </Select.Viewport>

          <SScrollDownButton>
            <CaretDown size={15} />
          </SScrollDownButton>
        </SSelectContent>
      </Select.Portal>
    </Select.Root>
  );
}
