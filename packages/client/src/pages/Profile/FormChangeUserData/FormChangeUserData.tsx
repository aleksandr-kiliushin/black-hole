import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { useGetAuthorizedUserQuery } from '@store/authorizedUser/api';

import { FormButton } from '@components/FormButton';
import { Input } from '@components/Input';

import {
  validateEmail,
  validateLogin,
  validateNames,
  validatePhone,
} from '@utils/authFormValidation';
import { isNetworkError } from '@utils/isNetworkError';

import { UserApi } from '@src/api/UserApi/UserApi';

import { TFormChangeUserData } from './types';

export const FormChangeUserData: FC = () => {
  const { data: authorizedUser, refetch: refetchAuthorizedUser } = useGetAuthorizedUserQuery();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<TFormChangeUserData>({
    mode: 'onChange',
  });

  const onSubmit = async (value: TFormChangeUserData) => {
    try {
      await UserApi.changeUserProfile({ ...value });
      refetchAuthorizedUser();
    } catch (error) {
      let message = 'Что-то пошло не так. Попробуйте перезагрузить страницу';

      if (isNetworkError(error)) {
        if (error.response.status >= 500) {
          message = 'Повторите попытку позже';
        } else {
          message = error.response.data.reason;
        }
      }

      setError('root', { type: 'server', message });
    }
  };

  if (authorizedUser === undefined) return null;

  return (
    <form
      action="submit"
      className="flex flex-col items-center justify-center xs:w-1/2 sm:w-1/2 lg:w-1/3 lg:max-w-464px gap-y-2"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className="text-xs p-0.5"
        defaultValue={authorizedUser.first_name}
        label="Имя"
        validationError={errors.first_name?.message}
        {...register('first_name', { validate: validateNames })}
      />
      <Input
        className="text-xs p-0.5"
        defaultValue={authorizedUser.second_name}
        label="Фамилия"
        validationError={errors.second_name?.message}
        {...register('second_name', { validate: validateNames })}
      />
      <Input
        className="text-xs p-0.5"
        defaultValue={authorizedUser.display_name === null ? '' : authorizedUser.display_name}
        label="Имя в чате"
        validationError={errors.display_name?.message}
        {...register('display_name', { validate: validateNames })}
      />
      <Input
        className="text-xs p-0.5"
        defaultValue={authorizedUser.login}
        label="Логин"
        validationError={errors.login?.message}
        {...register('login', { validate: validateLogin })}
      />
      <Input
        className="text-xs p-0.5"
        defaultValue={authorizedUser.email}
        label="Email"
        type="email"
        validationError={errors.email?.message}
        {...register('email', { validate: validateEmail })}
      />
      <Input
        className="text-xs p-0.5"
        defaultValue={authorizedUser.phone}
        label="Телефон"
        type="phone"
        validationError={errors.phone?.message}
        {...register('phone', { validate: validatePhone })}
      />
      <FormButton
        className="w-full"
        containerClassName="w-full mt-5"
        disabled={isSubmitting}
        error={errors.root?.message}
        type="submit"
      >
        Сохранить
      </FormButton>
    </form>
  );
};
