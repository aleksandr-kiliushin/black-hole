import { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '@store/hooks';

import { RoutePaths } from './constants';

export const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const auth = useAppSelector((state) => state.auth.authData);

  const location = useLocation();

  if (!auth) {
    return <Navigate replace state={{ from: location }} to={RoutePaths.SIGN_IN} />;
  }

  return <>{children}</>;
};
