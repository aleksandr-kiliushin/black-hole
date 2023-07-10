import clsx from 'clsx';
import { FC, useCallback, useEffect } from 'react';

import { authActions, getAuthUserInfo } from '@store/slices/auth/authSlice';

import { oAuthApi } from '@api/OAuthApi';

import { Background } from '@components/Background';
import { NoInternetConnectionNotification } from '@components/NoInternetConnectionNotification';

import { useIsOnline } from '@utils/isOnline';
import { useAppDispatch } from '@utils/useAppDispatch';
import { useAppSelector } from '@utils/useAppSelector';

import { AppRouter } from './providers/AppRouter';

export const App: FC = () => {
  const isInitiated = useAppSelector((state) => state.auth.isInitiated);
  const dispatch = useAppDispatch();
  const { isOnline } = useIsOnline();

  const onSignIn = useCallback(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      try {
        await oAuthApi.getAccessToken(code);
      } catch (e) {
        console.log(e);
      }
    }

    dispatch(getAuthUserInfo());
    dispatch(authActions.initAuthData());
  }, [dispatch]);

  useEffect(() => {
    onSignIn();
  }, [onSignIn]);

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
