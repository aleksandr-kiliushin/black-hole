import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AuthApi } from '../../api/Auth/Auth';

export interface User {
  id: number;
  login: string;
  first_name: string;
  second_name: string;
  display_name: null | string;
  avatar: null | string;
  email: string;
  phone: string;
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}

const initialState: UserSchema = {
  _inited: false,
};

const authApi = new AuthApi();

export const getAuthUserInfo = createAsyncThunk('auth/get', async () => {
  try {
    const res = await authApi.GetUserInfo();

    if (!res.data) {
      throw new Error();
    }
    localStorage.setItem('user', JSON.stringify(res.data));

    return res.data;
  } catch (error) {
    return console.error('Вы не авторизованы');
  }
});

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: state => {
      const user = localStorage.getItem('user');
      if (user) {
        state.authData = JSON.parse(user);
      }
      state._inited = true;
    },
    logout: state => {
      state.authData = undefined;
      localStorage.removeItem('user');
    },
  },
  extraReducers: builder => {
    builder.addCase(getAuthUserInfo.fulfilled, (state, action) => {
      state.authData = action.payload;
    });
  },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
