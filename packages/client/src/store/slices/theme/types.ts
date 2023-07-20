export interface IThemeState {
  colorScheme: ThemesEnum;
}

export enum ThemesEnum {
  TRIGGER = 'theme',
  TAILWIND_DARK_TRIGGER = 'dark',
  LIGHT = 'light',
  DARK = 'dark',
}
