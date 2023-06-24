import { RoutePaths } from '@src/providers/AppRouter/constants';

export const navigationItems = {
  forAuthenticatedUsers: [
    {
      url: RoutePaths.HOME,
      text: 'Главная',
    },
    {
      url: RoutePaths.GAME,
      text: 'Играть',
    },
    {
      url: RoutePaths.LEADERBOARD,
      text: 'Лидеры',
    },
    {
      url: RoutePaths.FORUM,
      text: 'Форум',
    },
    {
      url: RoutePaths.PROFILE,
      text: 'Профиль',
    },
  ],
  forNotAuthenticatedUsers: [
    {
      url: RoutePaths.SIGN_IN,
      text: 'Войти',
    },
    {
      url: RoutePaths.SIGN_UP,
      text: 'Зарегистрироваться',
    },
  ],
};
