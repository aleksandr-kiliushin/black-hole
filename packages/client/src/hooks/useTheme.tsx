import { useEffect } from 'react';

import { themeActions } from '@store/slices/theme/themeSlice';
import { ThemesEnum } from '@store/slices/theme/types';

import { useAppDispatch } from '@utils/useAppDispatch';
import { useAppSelector } from '@utils/useAppSelector';

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const colorScheme = useAppSelector((state) => state.theme.colorScheme);

  useEffect(() => {
    const theme = localStorage.getItem(ThemesEnum.TRIGGER) as ThemesEnum | null;

    if (theme) {
      dispatch(themeActions.toggleTheme(theme));
    }
  }, [dispatch]);

  useEffect(() => {
    if (colorScheme === ThemesEnum.DARK) {
      document.body.classList.add(ThemesEnum.TAILWIND_DARK_TRIGGER);
    } else {
      document.body.classList.remove(ThemesEnum.TAILWIND_DARK_TRIGGER);
    }
  }, [colorScheme]);
};
