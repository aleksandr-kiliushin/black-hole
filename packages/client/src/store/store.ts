import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authorizedUserApi } from './authorizedUser/api';
import { authReducer } from './slices/auth/authSlice';

const rootReducer = combineReducers({
  [authorizedUserApi.reducerPath]: authorizedUserApi.reducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authorizedUserApi.middleware),
  devTools: true,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
