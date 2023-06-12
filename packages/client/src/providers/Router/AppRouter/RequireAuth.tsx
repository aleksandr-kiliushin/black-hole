import { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useGetAuthorizedUserQuery } from '@store/authorizedUser/api';

import { RoutePaths } from './constants';

export const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const { error: authorizationError, isFetching: isAuthorizedUserFetching } =
    useGetAuthorizedUserQuery();

  if (isAuthorizedUserFetching) return null;

  const shouldNavigateToSignInPage =
    authorizationError !== undefined &&
    'status' in authorizationError &&
    authorizationError.status === 401;

  if (shouldNavigateToSignInPage) {
    return <Navigate replace state={{ from: location }} to={RoutePaths.SIGN_IN} />;
  }

  return <>{children}</>;
};
