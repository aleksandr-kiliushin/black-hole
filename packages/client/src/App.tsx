import { useAppDispatch, useAppSelector } from './store/hooks';
import { useCallback, useEffect } from 'react';
import { authActions, getAuthUserInfo } from './store/slices/auth/auth';
import { AppRouter } from './providers/Router';
import './App.css';

function App() {
  const isInited = useAppSelector(state => state.auth.isInited);
  const dispatch = useAppDispatch();

  const initFetch = useCallback(() => {
    dispatch(getAuthUserInfo());
    dispatch(authActions.initAuthData());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, []);

  return <>{isInited && <AppRouter />}</>;
}

export default App;
