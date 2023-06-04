import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import { RoutePaths } from './constants';

interface RequireAuthProps {
  children: JSX.Element;
}

function RequireAuth({ children }: RequireAuthProps) {
  const auth = useAppSelector(state => state.auth.authData);

  const location = useLocation();

  if (!auth) {
    return (
      <Navigate to={RoutePaths['sign-in']} state={{ from: location }} replace />
    );
  }

  return children;
}

export default RequireAuth;
