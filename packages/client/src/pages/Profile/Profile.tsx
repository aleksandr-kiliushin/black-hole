import { useNavigate } from 'react-router-dom';

import { useGetAuthorizedUserQuery, useLogOutMutation } from '@store/authorizedUser/api';

import { Navbar } from '@components/Navbar';

import { RoutePaths } from '@src/providers/Router/AppRouter/constants';

import { Avatar } from './Avatar';
import { FormChangeUserData } from './FormChangeUserData';
import { Layout } from './Layout';

export const Profile = () => {
  const navigate = useNavigate();

  const [logOut] = useLogOutMutation();

  const { data: authorizedUser } = useGetAuthorizedUserQuery();

  if (authorizedUser === undefined) return null;

  return (
    <>
      <Navbar />
      <Layout>
        <main className="flex flex-col justify-center items-center w-full">
          <Avatar />
          <FormChangeUserData />
          <button
            className="btn-primary text-white btn-primary xs:w-1/2 sm:w-1/2 lg:w-1/3 lg:max-w-464px gap-y-2 mt-3.5 focus:ring-red-400 focus:ring-opacity-75"
            onClick={() => {
              navigate(RoutePaths.CHANGE_PASSWORD);
            }}
          >
            Изменить пароль
          </button>
          <button
            className="text-white btn-primary bg-red-400 hover:bg-red-600 xs:w-1/2 sm:w-1/2 lg:w-1/3 lg:max-w-464px gap-y-2 mt-3.5 focus:ring-red-400 focus:ring-opacity-75"
            onClick={async () => {
              await logOut();
              navigate(RoutePaths.SIGN_IN);
            }}
          >
            Выйти из профиля
          </button>
        </main>
      </Layout>
    </>
  );
};
