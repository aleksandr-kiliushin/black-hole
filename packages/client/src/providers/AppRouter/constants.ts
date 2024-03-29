import { AppRoutes } from './types';

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.GAME]: '/game',
  [AppRoutes.GAME_START]: '/game-start',
  [AppRoutes.GAME_END]: '/game-end',
  [AppRoutes.FORUM]: '/forum',
  [AppRoutes.TOPIC_LIST]: '/forum/:idTopicList/topics',
  [AppRoutes.TOPIC]: '/forum/:idTopicList/topics/:idTopic',
  [AppRoutes.LEADERBOARD]: '/leaderboard',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.CHANGE_PASSWORD]: '/change-password',
  [AppRoutes.SIGN_IN]: '/sign-in',
  [AppRoutes.SIGN_UP]: '/sign-up',
  [AppRoutes.NOT_FOUND]: '*',
  [AppRoutes.SERVER_ERROR]: '/500',
};
