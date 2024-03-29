import { FC, useState } from 'react';
import { FiAlignCenter } from 'react-icons/fi';

import { Modal } from '@components/Modal';

import { randomAvatarPath } from '@utils/randomAvatarPath';

import { Navbar } from './Navbar';

export const Header: FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const onNavbarToggle = () => setIsNavbarOpen(!isNavbarOpen);

  return (
    <>
      <div className="bg-black/50">
        <header className="fixed z-10 left-1/2 top-0 -translate-x-1/2 flex flex-nowrap gap-4 px-8 py-4 justify-between items-center bg-black/50 w-full backdrop-blur-sm">
          <img alt="Аватар" height={48} src={randomAvatarPath} width={48} />
          <Navbar orientation="horizontal" />
          <button className="btn btn-primary block sm:hidden p-2" onClick={onNavbarToggle}>
            <FiAlignCenter className="w-8 h-8" />
          </button>
        </header>
      </div>
      <Modal isOpen={isNavbarOpen} onClose={onNavbarToggle}>
        <Navbar orientation="vertical" />
      </Modal>
    </>
  );
};
