import clsx from 'clsx';
import { forwardRef } from 'react';

import { TInputProps } from './types';

export const Input = forwardRef<HTMLInputElement, TInputProps>(function _Input(
  {
    wrapperClassName,
    label,
    className,
    labelClassName,
    validationError,
    errorClassName,
    ...inputProps
  },
  ref
) {
  return (
    <div className={clsx(wrapperClassName, 'flex flex-col items-center w-full')}>
      {!!label && (
        <label
          className={clsx(labelClassName, 'block mr-auto text-sm font-medium text-blue-400 mb-1')}
          htmlFor={inputProps.id}
        >
          {label}
        </label>
      )}
      <input
        {...inputProps}
        className={clsx(
          className,
          'bg-gray-50 border p-3 border-gray-300 text-gray-900 focus:ring-blue-500 rounded-lg focus:border-blue-500 block w-full focus-visible:outline-none',
          { 'border-red-500': !!validationError }
        )}
        ref={ref}
      />
      <span className={clsx('block text-xs text-red-500 mt-1 w-full min-h-16', errorClassName)}>
        {validationError}
      </span>
    </div>
  );
});
