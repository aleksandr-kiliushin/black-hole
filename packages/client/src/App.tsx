import clsx from 'clsx';
import { FC } from 'react';

import { Background } from '@components/Background';
import { NoInternetConnectionNotification } from '@components/NoInternetConnectionNotification';

import { useIsOnline } from '@utils/isOnline';
import { useAppSelector } from '@utils/useAppSelector';

import { useAuth } from '@src/hooks/useAuth';

import { AppRouter } from './providers/AppRouter';

export const App: FC = () => {
  const isInitiated = useAppSelector((state) => state.auth.isInitiated);
  const { isOnline } = useIsOnline();
  useAuth();

  if (!isInitiated) {
    return <p>Загрузка ...</p>;
  }

  return (
    <>
      <NoInternetConnectionNotification />
      <div className={clsx({ grayscale: !isOnline })}>
        <Background />
        <div className="relative z-1">
          <AppRouter />
        </div>
      </div>
    </>
  );
};
