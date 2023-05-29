import clsx from 'clsx';

import { ButtonProps } from './types';

export const Button = ({ text, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        `bg-blue-700 hover:bg-blue-800
        focus:ring-4 focus:ring-blue-300
         rounded-lg px-5 py-2.5focus:outline-none
        hover:bg-blue-800 focus:ring-4
        focus:ring-blue-300 block
        `
      )}
      {...props}>
      {text}
    </button>
  );
};
