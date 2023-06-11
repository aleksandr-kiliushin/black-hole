import clsx from 'clsx';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const AppLink: FC<LinkProps> = ({ className, ...props }) => {
  return (
    <Link
      {...props}
      className={clsx('text-blue-600 mt-4 visited:text-blue-600 hover:text-blue-800', className)}
    >
      {props.children}
    </Link>
  );
};
