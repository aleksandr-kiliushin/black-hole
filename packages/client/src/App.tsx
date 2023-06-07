import { useAppDispatch, useAppSelector } from './store/hooks';
import { useEffect } from 'react';
import { authActions, getAuthUserInfo } from './store/slices/auth/auth';
import { AppRouter } from './providers/Router';
import './App.css';

function App() {
  const isInited = useAppSelector(state => state.auth.isInited);
  const dispatch = useAppDispatch();

  const initFetch = () => {
    dispatch(getAuthUserInfo());
    dispatch(authActions.initAuthData());
  };

  useEffect(() => {
    initFetch();
  }, []);

  return <>{isInited && <AppRouter />}</>;
}

export default App;
