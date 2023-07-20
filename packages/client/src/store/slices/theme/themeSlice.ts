import { createAction, createSlice } from '@reduxjs/toolkit';

import { IThemeState, ThemesEnum } from './types';

const initialState: IThemeState = {
  colorScheme: ThemesEnum.DARK,
};

const toggleTheme = createAction('themeSlice/toggleTheme', (theme: ThemesEnum) => {
  localStorage.setItem(ThemesEnum.TRIGGER, theme);

  return { payload: theme };
});

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(toggleTheme, (state, { payload }) => {
      state.colorScheme = payload;
    });
  },
});

export const themeActions = { toggleTheme };
export const themeReducer = themeSlice.reducer;
