import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { AppLink } from '@components/AppLink';
import { FormButton } from '@components/FormButton';
import { Header } from '@components/Header';
import { Input } from '@components/Input';

import {
  validateEmail,
  validateLogin,
  validateNames,
  validatePassword,
  validatePhone,
} from '@utils/authFormValidation';
import { isNetworkError } from '@utils/isNetworkError';

import { authApi } from '@src/api/Auth/Auth';
import { RoutePaths } from '@src/providers/Router/AppRouter/constants';

import { TFormValues } from './types';

export const SignUp: FC = () => {
  const [hasRegistered, setHasRegistered] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: {
      errors: {
        root,
        login: loginError,
        password: passwordError,
        firstName: nameError,
        secondName: surnameError,
        email: emailError,
        phone: phoneError,
      },
      isSubmitting,
    },
  } = useForm<TFormValues>({ mode: 'onChange' });

  const onSubmit = async ({
    firstName,
    secondName,
    login,
    email,
    password,
    phone,
  }: TFormValues) => {
    try {
      await authApi.SignUp({
        first_name: firstName,
        second_name: secondName,
        login,
        email,
        password,
        phone,
      });

      reset();

      setHasRegistered(true);
    } catch (error) {
      let message = 'Что-то пошло не так. Попробуйте перезагрузить страницу';

      if (isNetworkError(error)) {
        if (error.response.data.reason === 'User already in system') {
          message = 'Пользователь уже авторизован';
        }

        if (error.response.data.reason === 'Login already exists') {
          message = 'Пользователь с таким логином уже существует';
        }

        if (error.response.data.reason === 'Email already exists') {
          message = 'Пользователь с такой почтой уже существует';
        }

        if (error.response.status >= 500) {
          message = 'Повторите попытку позже';
        }
      }

      setError('root', { type: 'server', message });
    }
  };

  if (hasRegistered) {
    return <Navigate to={RoutePaths.SIGN_IN} />;
  }

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center h-screen w-full">
        <h1 className="text-4xl mb-8">Регистрация</h1>
        <form
          action="submit"
          className="flex flex-col items-center justify-center xs:w-1/2 sm:w-1/2 lg:w-1/3 lg:max-w-464px gap-y-2"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            className="text-xs p-0.5 text-xs"
            label="Имя"
            validationError={nameError?.message}
            {...register('firstName', { validate: validateNames })}
          />
          <Input
            className="text-xs p-0.5 text-xs"
            label="Фамилия"
            validationError={surnameError?.message}
            {...register('secondName', { validate: validateNames })}
          />
          <Input
            className="text-xs p-0.5 text-xs"
            label="Логин"
            validationError={loginError?.message}
            {...register('login', { validate: validateLogin })}
          />
          <Input
            className="text-xs p-0.5 text-xs"
            label="Email"
            type="email"
            validationError={emailError?.message}
            {...register('email', { validate: validateEmail })}
          />
          <Input
            className="text-xs p-0.5 text-xs"
            label="Пароль"
            type="password"
            validationError={passwordError?.message}
            {...register('password', { validate: validatePassword })}
          />
          <Input
            className="text-xs p-0.5 text-xs"
            label="Телефон"
            type="phone"
            validationError={phoneError?.message}
            {...register('phone', { validate: validatePhone })}
          />
          <FormButton
            className="w-full px-3 py-2 mt-3 text-white font-medium text-sm mt-0"
            containerClassName="w-full mt-5"
            disabled={isSubmitting}
            error={root?.message}
            type="submit"
          >
            Регистрация
          </FormButton>
        </form>
        <AppLink title="Войти" to="/sign-in">
          Войти
        </AppLink>
      </main>
    </>
  );
};
