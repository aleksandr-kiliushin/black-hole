import { FC, useEffect } from 'react';

import { AppRouter } from './providers/Router';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { authActions, getAuthUserInfo } from './store/slices/auth/auth';

export const App: FC = () => {
  const isInited = useAppSelector((state) => state.auth.isInited);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAuthUserInfo());
    dispatch(authActions.initAuthData());
  }, [dispatch]);

  return <>{isInited && <AppRouter />}</>;
};
