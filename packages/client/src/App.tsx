import { useAppDispatch, useAppSelector } from './store/hooks';
import { useCallback, useEffect } from 'react';
import { authActions, getAuthUserInfo } from './store/slices/auth';
import { AppRouter } from './providers/Router';
import './App.css';

function App() {
  const inited = useAppSelector(state => state.auth._inited);
  const dispatch = useAppDispatch();

  const initFetch = useCallback(() => {
    dispatch(getAuthUserInfo());
    dispatch(authActions.initAuthData());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, []);

  return <>{inited && <AppRouter />}</>;
}

export default App;
