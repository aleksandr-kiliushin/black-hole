import { FC, useState } from 'react';
import { FiAlignCenter } from 'react-icons/fi';

import { Modal } from '@components/Modal';

import { randomAvatarPath } from '@utils/randomAvatarPath';

import { Navbar } from './Navbar';

export const Header: FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  const onNavbarToggle = () => setIsNavbarOpen(!isNavbarOpen);

  return (
    <>
      <header className="page-container flex flex-nowrap gap-4 py-4 justify-between items-center">
        <img alt="Аватар" height={48} src={randomAvatarPath} width={48} />
        <Navbar orientation="horizontal" />
        <button className="btn btn-primary block sm:hidden p-2" onClick={onNavbarToggle}>
          <FiAlignCenter className="w-8 h-8" />
        </button>
      </header>
      <Modal isOpen={isNavbarOpen} onClose={onNavbarToggle}>
        <Navbar orientation="vertical" />
      </Modal>
    </>
  );
};
