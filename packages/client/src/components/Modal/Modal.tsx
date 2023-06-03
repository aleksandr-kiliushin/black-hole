import { FC, useEffect } from 'react';
import { ModalProps } from './types';
import { createPortal } from 'react-dom';
import IconClose from '../icons/IconClose';

const Modal: FC<ModalProps> = ({ isOpen, title, children, onClose }) => {
  const parentElement = document.createElement('div');

  useEffect(() => {
    const root = document.getElementById('root');

    if (root) {
      root.appendChild(parentElement);

      return () => {
        root.removeChild(parentElement);
      };
    }
  }, [isOpen]);

  return isOpen
    ? createPortal(
        <div className="fixed flex flex-col inset-0 bg-white p-4">
          <div className="flex justify-end">
            {title && <header className="mr-auto">{title}</header>}
            <button onClick={onClose}>
              <IconClose width={32} height={32} />
            </button>
          </div>
          <div className="flex items-center justify-center grow">
            {children}
          </div>
        </div>,
        parentElement
      )
    : null;
};

export default Modal;
