import { SToastMessage } from "./styled";

interface ToastMessageProps {
  display: boolean;
  message: string;
}

export function ToastMessage({ message, display }: ToastMessageProps) {
  return (
    <SToastMessage $display={display}>
      {message}
    </SToastMessage>
  );
}
