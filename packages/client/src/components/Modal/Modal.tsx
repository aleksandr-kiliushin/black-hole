import { FC } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';

import { Background } from '@components/Background';

import { TModalProps } from './types';

export const Modal: FC<TModalProps> = ({ isOpen, title, children, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed flex flex-col inset-0 bg-black p-4">
      <Background />
      <div className="relative z-1 flex justify-end">
        {title && <header className="mr-auto text-black">{title}</header>}
        <button onClick={onClose}>
          <FiX className="w-8 h-8 text-white" />
        </button>
      </div>
      <div className="relative z-1 flex items-center justify-center grow">{children}</div>
    </div>,
    document.body
  );
};
