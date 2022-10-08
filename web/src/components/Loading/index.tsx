import { SLoading } from "./styled";

export interface LoadingProps {
  margin?: string;
}

/**
 * Accepts a margin shorthand property, it works as in default css.
 * @property margin
 * @example margin="10px 20px 10px 20px"
 */
export function Loading({ margin }: LoadingProps) {
  return (
    <SLoading
      margin={margin}
    />
  );
}
