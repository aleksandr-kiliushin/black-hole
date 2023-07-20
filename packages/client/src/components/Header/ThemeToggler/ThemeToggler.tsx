import clsx from 'clsx';
import { FC } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

import { themeActions } from '@store/slices/theme/themeSlice';
import { ThemesEnum } from '@store/slices/theme/types';

import { useAppDispatch } from '@utils/useAppDispatch';
import { useAppSelector } from '@utils/useAppSelector';

export const ThemeToggler: FC = () => {
  const dispatch = useAppDispatch();
  const colorScheme = useAppSelector((state) => state.theme.colorScheme);

  const toggleLightTheme = () => dispatch(themeActions.toggleTheme(ThemesEnum.LIGHT));
  const toggleDarkTheme = () => dispatch(themeActions.toggleTheme(ThemesEnum.DARK));

  return (
    <div className="flex gap-4 sm:gap-2">
      <button
        className={clsx('btn btn-primary shrink-0', {
          'bg-zinc-500 hover:bg-zinc-500': colorScheme === ThemesEnum.LIGHT,
        })}
        disabled={colorScheme === ThemesEnum.LIGHT}
        onClick={toggleLightTheme}
      >
        <BiSun className="w-8 sm:w-4 sm:h-4 h-8" />
      </button>
      <button
        className={clsx('btn btn-primary shrink-0', {
          'bg-zinc-500 hover:bg-zinc-500': colorScheme === ThemesEnum.DARK,
        })}
        disabled={colorScheme === ThemesEnum.DARK}
        onClick={toggleDarkTheme}
      >
        <BiMoon className="w-8 sm:w-4 sm:h-4 h-8" />
      </button>
    </div>
  );
};
