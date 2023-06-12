import clsx from 'clsx';
import { FC } from 'react';

import { TFormButtonProps } from './types';

export const FormButton: FC<TFormButtonProps> = ({
  error,
  errorClassName,
  containerClassName,
  ...restProps
}) => {
  return (
    <div className={containerClassName}>
      <span
        className={clsx(
          errorClassName,
          'mb-3 block text-xs text-red-500 height-1 min-h-16 mx-auto w-fit'
        )}
      >
        {error}
      </span>
      <button {...restProps} className={clsx(restProps.className, 'btn btn-primary')} />
    </div>
  );
};
