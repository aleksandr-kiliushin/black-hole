import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { useGetAuthorizedUserQuery, useSignInMutation } from '@store/authorizedUser/api';

import { FormButton } from '@components/FormButton';
import { Header } from '@components/Header';
import { Input } from '@components/Input';

import { validateLogin, validatePassword } from '@utils/authFormValidation';
import { isNetworkError } from '@utils/isNetworkError';

import { RoutePaths } from '@src/providers/Router/AppRouter/constants';

import { TFormValues } from './types';

export const SignIn: FC = () => {
  const navigate = useNavigate();
  const [signIn] = useSignInMutation();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TFormValues>({ mode: 'onChange' });

  const onSubmit = async (data: TFormValues) => {
    try {
      await signIn(data);
      reset();
      navigate(RoutePaths.HOME);
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

      setError('root', { type: 'server', message });
    }
  };

  const {
    data: authorizedUser,
    isError: isAuthorizationError,
    isFetching: isAuthorizedUserFetching,
  } = useGetAuthorizedUserQuery();

  if (isAuthorizedUserFetching) return null;

  if (!isAuthorizationError && authorizedUser !== undefined) {
    return <Navigate to={RoutePaths.HOME} />;
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
            validationError={errors.login?.message}
            {...register('login', { validate: validateLogin })}
          />
          <Input
            className="text-xs p-0.5 text-xs"
            label="Пароль"
            type="password"
            validationError={errors.password?.message}
            {...register('password', { validate: validatePassword })}
          />
          <FormButton
            className="w-full px-3 py-2 mt-3"
            containerClassName="w-full mt-5"
            disabled={isSubmitting}
            error={errors.root?.message}
            type="submit"
          >
            Войти
          </FormButton>
        </form>
        <Link className="btn btn-secondary text-center mt-3" title="Регистрация" to="/sign-up">
          Регистрация
        </Link>
      </main>
    </>
  );
};
