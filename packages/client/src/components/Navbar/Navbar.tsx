import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { RoutePaths } from '../../providers/Router/AppRouter/constants';
import { TNavbarProps } from './types';

export const Navbar: FC<TNavbarProps> = ({ isVertical = false }) => {
  return (
    <nav>
      <ul
        className={clsx(
          'items-center gap-2 justify-end w-full gap-x-4',
          isVertical ? 'flex flex-col' : 'hidden sm:flex'
        )}
      >
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.HOME}>
            Home
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.GAME}>
            Game
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.GAME_START}>
            Start Game
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.GAME_END}>
            End Game
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.LEADERBOARD}>
            Leaderboard
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.FORUM}>
            Forum
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.PROFILE}>
            Profile
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.SIGN_IN}>
            Login
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:text-blue-400" to={RoutePaths.SIGN_UP}>
            Sign-up
          </Link>
        </li>
      </ul>
    </nav>
  );
};
