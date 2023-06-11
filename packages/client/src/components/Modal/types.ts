import { ReactNode } from 'react';

export type TModalProps = {
  isOpen: boolean;
  title?: string;
  children: ReactNode;
  onClose: VoidFunction;
};
