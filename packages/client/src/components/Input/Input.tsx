import clsx from 'clsx';

import { InputProps } from './types';

export const Input = ({
  wrapperClassName,
  label,
  className,
  labelClassName,
  ...inputProps
}: InputProps) => {
  return (
    <div className={clsx(wrapperClassName, 'flex flex-col items-center')}>
      {label !== undefined && (
        <label
          htmlFor={inputProps.id}
          className={clsx(
            labelClassName,
            `block mr-auto text-sm font-medium text-gray-700 mb-1`
          )}>
          {label}
        </label>
      )}
      <input
        {...inputProps}
        className={clsx(
          className,
          `bg-gray-50 border text-gray-900
          border-gray-300 text-gray-900 focus:ring-blue-500 rounded-lg
          focus:border-blue-500 block w-full focus-visible:outline-none`
        )}
      />
    </div>
  );
};
