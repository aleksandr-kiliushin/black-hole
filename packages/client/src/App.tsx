import clsx from 'clsx';
import { FC, useEffect } from 'react';

import { authActions, getAuthUserInfo } from '@store/slices/auth/authSlice';

import { Background } from '@components/Background';
import { NoInternetConnectionNotification } from '@components/NoInternetConnectionNotification';

import { useIsOnline } from '@utils/isOnline';
import { useAppDispatch } from '@utils/useAppDispatch';
import { useAppSelector } from '@utils/useAppSelector';

import { AppRouter } from './providers/AppRouter';

export const App: FC = () => {
  const isInitiated = useAppSelector((state) => state.auth.isInitiated);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAuthUserInfo());
    dispatch(authActions.initAuthData());
  }, [dispatch]);

  const { isOnline } = useIsOnline();

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
