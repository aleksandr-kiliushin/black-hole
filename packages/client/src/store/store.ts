import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slices/auth/authSlice';
import { gameStatsSlice } from './slices/gameStats/gameStatsSlice';
import { soundReducer } from './slices/sound/soundSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  sound: soundReducer,
  gameStats: gameStatsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
