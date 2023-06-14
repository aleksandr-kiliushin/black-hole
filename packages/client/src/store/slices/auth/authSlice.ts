import { TUser } from '@app-types/TUser';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { authApi } from '@api/authApi';

import { TAuthState } from './types';

const initialState: TAuthState = {
  authorizedUser: null,
  isInitiated: false,
};

export const getAuthUserInfo = createAsyncThunk('auth/get', async (arg, thunkApi) => {
  try {
    const res = await authApi.getUserInfo();

    if (!res.data) {
      throw new Error();
    }
    localStorage.setItem('user', JSON.stringify(res.data));

    return res.data;
  } catch (error) {
    console.error('Вы не авторизованы');
    return thunkApi.rejectWithValue(undefined);
  }
});

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<TUser>) => {
      state.authorizedUser = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem('user');
      if (user) {
        state.authorizedUser = JSON.parse(user);
      }
      state.isInitiated = true;
    },
    logout: (state) => {
      state.authorizedUser = null;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAuthUserInfo.fulfilled, (state, { payload }) => {
      state.authorizedUser = payload;
    });
    builder.addCase(getAuthUserInfo.rejected, (state) => {
      state.authorizedUser = null;
    });
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
