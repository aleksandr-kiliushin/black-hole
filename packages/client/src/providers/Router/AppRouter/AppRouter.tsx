import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Forum } from '@pages/Forum';
import { Game } from '@pages/Game';
import { GameEnd } from '@pages/GameEnd';
import { GameStart } from '@pages/GameStart';
import { Home } from '@pages/Home';
import { Leaderboard } from '@pages/Leaderboard/Leaderboard';
import { Profile } from '@pages/Profile';
import { ChangePassword } from '@pages/Profile/ChangePassword';
import { SignIn } from '@pages/SignIn/SignIn';
import { SignUp } from '@pages/_SignUp';

import { RequireAuth } from './RequireAuth';
import { RoutePaths } from './constants';
import { AppRoutes, TAppRouteProps } from './types';

const routeConfig: Record<AppRoutes, TAppRouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePaths.HOME,
    element: <Home />,
    authOnly: true,
  },
  [AppRoutes.GAME]: {
    path: RoutePaths.GAME,
    element: <Game />,
    authOnly: true,
  },
  [AppRoutes.GAME_START]: {
    path: RoutePaths.GAME_START,
    element: <GameStart />,
    authOnly: true,
  },
  [AppRoutes.GAME_END]: {
    path: RoutePaths.GAME_END,
    element: <GameEnd />,
    authOnly: true,
  },
  [AppRoutes.FORUM]: {
    path: RoutePaths.FORUM,
    element: <Forum />,
    authOnly: true,
  },
  [AppRoutes.LEADERBOARD]: {
    path: RoutePaths.LEADERBOARD,
    element: <Leaderboard />,
    authOnly: true,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePaths.PROFILE,
    element: <Profile />,
    authOnly: true,
  },
  [AppRoutes.CHANGE_PASSWORD]: {
    path: RoutePaths.CHANGE_PASSWORD,
    element: <ChangePassword />,
    authOnly: true,
  },
  [AppRoutes.SIGN_IN]: {
    path: RoutePaths.SIGN_IN,
    element: <SignIn />,
  },
  [AppRoutes.SIGN_UP]: {
    path: RoutePaths.SIGN_UP,
    element: <SignUp />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.NOT_FOUND,
    element: <div>Страница не найдена</div>,
  },
};

const renderWithWrapper = (route: TAppRouteProps) => {
  const element = <>{route.element}</>;

  return (
    <Route
      element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      key={route.path}
      path={route.path}
    />
  );
};

export const AppRouter: FC = () => {
  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
