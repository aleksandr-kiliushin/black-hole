import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slices/auth/authSlice';
import { TAuthState } from './slices/auth/types';
import { gameStatsSlice } from './slices/gameStats/gameStatsSlice';
import { TGameState } from './slices/gameStats/types';

const rootReducer = combineReducers({
  auth: authReducer,
  gameStats: gameStatsSlice.reducer,
});

export type TStoreState = {
  auth: TAuthState;
  gameStats: TGameState;
};

export const createStore = (initialState?: TStoreState) =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    preloadedState: initialState,
  });

export type TRootState = ReturnType<ReturnType<typeof createStore>['getState']>;
export type TAppDispatch = ReturnType<typeof createStore>['dispatch'];
