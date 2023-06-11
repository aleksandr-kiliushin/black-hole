import { FC } from 'react';

import { Header } from '@components/Header';

import { authApi } from '@src/api/Auth/Auth';

export const Profile: FC = () => {
  return (
    <>
      <Header />
      <h1 className="text-4xl font-bold">Profile</h1>
      <button className="text-white btn-primary" onClick={authApi.SignOut}>
        Выйти из профиля
      </button>
    </>
  );
};
