import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { RoutePaths } from '@src/providers/Router/AppRouter/constants';

import { TNavbarProps } from './types';

export const Navbar: FC<TNavbarProps> = ({ orientation }) => {
  return (
    <nav>
      <ul
        className={clsx(
          'items-center gap-2 justify-end w-full gap-x-4',
          orientation === 'vertical' && 'flex flex-col',
          orientation === 'horizontal' && 'hidden sm:flex'
        )}
      >
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.HOME}>
            Главная
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.GAME}>
            Играть
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.LEADERBOARD}>
            Лидеры
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.FORUM}>
            Форум
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.PROFILE}>
            Профиль
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.SIGN_IN}>
            Войти
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.SIGN_UP}>
            Зарегистрироваться
          </Link>
        </li>
      </ul>
    </nav>
  );
};
