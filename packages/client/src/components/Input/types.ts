import { InputHTMLAttributes } from 'react';

export type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  wrapperClassName?: string;
  label?: string;
  labelClassName?: string;
  validationError?: string;
  errorClassName?: string;
};
