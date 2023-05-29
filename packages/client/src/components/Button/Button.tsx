import { ButtonProps } from './types';

export const Button = ({ text, ...props }: ButtonProps) => {
  return <button {...props}>{text}</button>;
};
