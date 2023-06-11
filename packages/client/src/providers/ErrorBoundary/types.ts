import { ReactNode } from 'react';

export type TErrorBoundaryProps = {
  children: ReactNode;
};

export type TErrorBoundaryState = {
  hasError: boolean;
};
