import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../providers/Router/AppRouter/constants';

export const Navbar: FC = () => {
  return (
    <nav>
      <ul className="flex xs:flex-col xs:items-center sm:flex-row gap-x-4 border border-black">
        <li>
          <Link className="text-blue-600" to={RoutePaths.HOME}>
            Home
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths.GAME}>
            Game
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths.GAME_START}>
            Start Game
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths.GAME_END}>
            End Game
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths.LEADERBOARD}>
            Leaderboard
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths.FORUM}>
            Forum
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths.PROFILE}>
            Profile
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths.SIGN_IN}>
            Login
          </Link>
        </li>
        <li>
          <Link className="text-blue-600" to={RoutePaths.SIGN_UP}>
            Sign-up
          </Link>
        </li>
      </ul>
    </nav>
  );
};
