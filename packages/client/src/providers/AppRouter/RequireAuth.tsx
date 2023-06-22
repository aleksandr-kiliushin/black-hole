import { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '@utils/useAppSelector';

import { RoutePaths } from './constants';

export const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const authorizedUser = useAppSelector((state) => state.auth.authorizedUser);

  const location = useLocation();

  if (authorizedUser === null) {
    return <Navigate replace state={{ from: location }} to={RoutePaths.SIGN_IN} />;
  }

  return <>{children}</>;
};
