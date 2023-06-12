import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authorizedUserApi } from './authorizedUser/api';

const rootReducer = combineReducers({
  [authorizedUserApi.reducerPath]: authorizedUserApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authorizedUserApi.middleware),
  devTools: true,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
