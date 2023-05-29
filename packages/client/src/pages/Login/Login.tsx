import { useForm } from 'react-hook-form';
import { redirect } from 'react-router-dom';

import { FormButton } from '../../components/FormButton/FormButton';
import { Input } from '../../components/Input/Input';
import { Navbar } from '../../components/Navbar';
import { FormValues } from './types';
import { validateLogin, validatePassword } from './validationUtils';

const submit = (shouldThrow: boolean) => {
  return new Promise(function (res, rej) {
    if (shouldThrow) {
      rej({ message: 'Error' });
    } else {
      res('Success!');
    }
  });
};

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: {
      errors: { root, login: loginError, password: passwordError },
      isSubmitting,
    },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await submit(true);
      redirect('profile');
    } catch (error) {
      const typedError = error as any;
      const errorMessage = typedError?.message;

      if (typeof errorMessage === 'string') {
        setError('root', { message: errorMessage, type: 'server' });
      }
    }
  };

  return (
    <>
      <Navbar />
      <main
        className="flex flex-col
    justify-center items-center
    h-screen w-screen">
        <h1 className="text-4xl mb-8">Войти</h1>
        <form
          action="submit"
          noValidate
          className="flex flex-col items-center justify-center w-1/5 gap-y-2"
          onSubmit={handleSubmit(onSubmit)}>
          <Input
            className="text-xs p-0.5 text-xs"
            label="Логин"
            validationError={loginError?.message}
            {...register('login', { validate: validateLogin })}
          />
          <Input
            type="password"
            className="text-xs p-0.5 text-xs"
            label="Пароль"
            validationError={passwordError?.message}
            {...register('password', { validate: validatePassword })}
          />
          <FormButton
            containerClassName={`
            w-full mt-5
          `}
            className={`
              w-full px-3
              py-2 mt-3 text-white
              font-medium text-sm
              mt-0
            `}
            text="Войти"
            error={root?.message}
            type="submit"
            disabled={isSubmitting}
          />
        </form>
      </main>
    </>
  );
};
