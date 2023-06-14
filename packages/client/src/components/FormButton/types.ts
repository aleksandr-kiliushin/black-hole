import { ButtonHTMLAttributes } from 'react';

export type TFormButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  error?: string;
  errorClassName?: string;
  containerClassName?: string;
};
