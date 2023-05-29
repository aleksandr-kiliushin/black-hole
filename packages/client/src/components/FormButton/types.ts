import { ButtonProps } from '../Button/types';

export type FormButtonProps = ButtonProps & {
  error?: string;
  errorClassName?: string;
  containerClassName?: string;
};
