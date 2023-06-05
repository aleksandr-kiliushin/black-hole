import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../providers/Router/AppRouter/constants';

export const Navbar: FC = () => {
  return (
    <nav>
      <ul className="flex xs:flex-col xs:items-center sm:flex-row gap-x-4 border border-black">
        <li>
          <Link className="text-blue-600" to={RoutePaths.home}>
            Home
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths.game}>
            Game
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths['game-start']}>
            Start Game
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths['game-end']}>
            End Game
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths.leaderboard}>
            Leaderboard
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths.forum}>
            Forum
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths.profile}>
            Profile
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths['sign-in']}>
            Login
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths['sign-up']}>
            Sign-up
          </Link>
        </li>
      </ul>
    </nav>
  );
};
