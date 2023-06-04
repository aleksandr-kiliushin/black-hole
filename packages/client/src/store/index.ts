import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
// import profileReducer from '../slices/profile';
// import { authReducer } from '../slices/auth';

const rootReducer = combineReducers({
  //   profile: profileReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  // middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware().concat([
  //         authApi.middleware,
  //     ])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
