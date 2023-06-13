import { FC, useEffect } from 'react';

import { authActions, getAuthUserInfo } from '@store/slices/auth/authSlice';

import { useAppDispatch } from '@utils/useAppDispatch';
import { useAppSelector } from '@utils/useAppSelector';

import { AppRouter } from './providers/Router';

export const App: FC = () => {
  const isInitiated = useAppSelector((state) => state.auth.isInitiated);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAuthUserInfo());
    dispatch(authActions.initAuthData());
  }, [dispatch]);

  if (!isInitiated) {
    return null;
  }

  return <AppRouter />;
};
