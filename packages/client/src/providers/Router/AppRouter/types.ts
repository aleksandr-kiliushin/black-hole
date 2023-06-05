import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  HOME = 'home',
  GAME = 'game',
  GAME_START = 'game-start',
  GAME_END = 'game-end',
  FORUM = 'forum',
  LEADERBOARD = 'leaderboard',
  PROFILE = 'profile',
  CHANGE_PASSWORD = 'change-password',
  SIGN_IN = 'sign-in',
  SIGN_UP = 'sign-up',
  NOT_FOUND = 'not-found',
}

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export interface RequireAuthProps {
  children: JSX.Element;
}
