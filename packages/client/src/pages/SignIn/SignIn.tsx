import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { authApi } from '../../api/Auth/Auth';
import AppLink from '../../components/AppLink/index';
import FormButton from '../../components/FormButton';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { validateLogin, validatePassword } from '../../helpers/authFormValidation';
import { RoutePaths } from '../../providers/Router/AppRouter/constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { authActions, getAuthUserInfo } from '../../store/slices/auth/auth';
import { isNetworkError } from '../../typeGuards/isNetworkError';
import { TFormValues } from './types';

export const SignIn: FC = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.authData);

  const {
    register,
    handleSubmit,
    setError,
    formState: {
      errors: { root, login: loginError, password: passwordError },
      isSubmitting,
    },
    reset,
  } = useForm<TFormValues>({
    mode: 'onChange',
  });

  const onSubmit = async (data: TFormValues) => {
    try {
      await authApi.SignIn(data);

      reset();

      dispatch(getAuthUserInfo());
      dispatch(authActions.initAuthData());
    } catch (error) {
      let message = 'Что-то пошло не так. Попробуйте перезагрузить страницу';

      if (isNetworkError(error)) {
        if (error.response.status === 401) {
          message = 'Неверный логин или пароль';
        }

        if (error.response.data.reason === 'User already in system') {
          message = 'Пользователь уже авторизован';
        }

        if (error.response.status >= 500) {
          message = 'Повторите попытку позже';
        }
      }

      setError('root', {
        type: 'server',
        message,
      });
    }
  };

  if (auth) {
    return <Navigate to={RoutePaths.PROFILE} />;
  }

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center h-screen w-full">
        <h1 className="text-4xl mb-8">Войти</h1>
        <form
          action="submit"
          className="flex flex-col items-center justify-center xs:w-1/2 sm:w-1/2 lg:w-1/3 lg:max-w-464px gap-y-2"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            className="text-xs p-0.5 text-xs"
            label="Логин"
            validationError={loginError?.message}
            {...register('login', { validate: validateLogin })}
          />
          <Input
            className="text-xs p-0.5 text-xs"
            label="Пароль"
            type="password"
            validationError={passwordError?.message}
            {...register('password', { validate: validatePassword })}
          />
          <FormButton
            className="w-full px-3 py-2 mt-3 text-white font-medium text-sm mt-0"
            containerClassName="w-full mt-5"
            disabled={isSubmitting || !!auth}
            error={root?.message}
            type="submit"
          >
            Войти
          </FormButton>
        </form>
        <AppLink title="Регистрация" to="/sign-up">
          Регистрация
        </AppLink>
      </main>
    </>
  );
};
