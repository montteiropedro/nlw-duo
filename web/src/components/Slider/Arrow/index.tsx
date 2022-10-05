import { MouseEventHandler } from "react";
import { SCaretLeft, SCaretRight } from "./styled";
import { THEME } from "../../../utils/theme";

interface ArrowProps {
  left?: boolean;
  disabled: boolean;
  onClick: (e: any) => void;
}

export function Arrow({ left, disabled, onClick }: ArrowProps) {
  const status = disabled ? "arrow-disabled" : "";

  return(
    <>
      {left ? (
        <SCaretLeft
          size={48}
          onClick={onClick}
          className={`arrow ${left ? "arrow--left" : "arrow--right"} ${status}`}
        />
      ) : (
        <SCaretRight
          size={48}
          color={`${THEME.COLORS.ZINC_400}`}
          onClick={onClick}
          className={`arrow ${left ? "arrow--left" : "arrow--right"} ${status}`}
        />
      )}
    </>
  );
}
