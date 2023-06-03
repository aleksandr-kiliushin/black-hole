import { useState } from 'react';
import { RANDOM_AVATAR_PATH } from '../../utils/global';
import { Navbar } from '../Navbar';
import IconMenu from '../icons/IconMenu';
import { Modal } from '../Modal';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  const onNavbarToggle = () => setIsNavbarOpen(!isNavbarOpen);

  return (
    <header className="page-container flex flex-nowrap gap-4 py-4 justify-between items-center">
      <img src={RANDOM_AVATAR_PATH} alt="аватар" width={48} height={48} />
      <Navbar />
      <button
        className="btn-primary block sm:hidden p-2"
        onClick={onNavbarToggle}>
        <IconMenu width={32} height={32} />
      </button>
      <Modal isOpen={isNavbarOpen} onClose={onNavbarToggle}>
        <Navbar />
      </Modal>
    </header>
  );
};

export default Header;
