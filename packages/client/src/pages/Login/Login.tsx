import { useForm } from 'react-hook-form';

import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { FormValues } from './types';

const onSubmit = (data: FormValues) => {
  return Promise.resolve(data);
};

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<FormValues>({ mode: 'onChange' });
  return (
    <main className="flex  justify-center items-center h-screen w-screen">
      <form
        action="submit"
        noValidate
        className="flex flex-col items-center h-full justify-center w-5/6 gap-y-2"
        onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="sm:text-xs p-0.5 text-xs"
          label="Логин"
          {...register('login')}
        />
        <Input
          type="password"
          className="sm:text-xs p-0.5 text-xs"
          label="Пароль"
          {...register('password')}
        />
        <Button text="Войти" />
      </form>
    </main>
  );
};
