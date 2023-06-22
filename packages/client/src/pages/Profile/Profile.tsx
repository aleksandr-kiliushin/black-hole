import { TUser } from '@app-types/TUser';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { authActions } from '@store/slices/auth/authSlice';

import { authApi } from '@api/authApi';

import { Header } from '@components/Header';

import { useAppDispatch } from '@utils/useAppDispatch';

import { RoutePaths } from '@src/providers/AppRouter/constants';

import { Avatar } from './Avatar';
import { FormChangeUserData } from './FormChangeUserData';

export const Profile = () => {
  const [userInfo, setUserInfo] = useState<TUser | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userInfo) {
      fetchUserInfo();
    }
  }, [userInfo]);

  const onLogout = () => {
    authApi.signOut();
    dispatch(authActions.logout());
  };

  const fetchUserInfo = async () => {
    const response = await authApi.getUserInfo();
    setUserInfo(response.data);
  };

  if (!userInfo) {
    return null;
  }

  return (
    <div className="min-h-[calc(100vh-1.75rem)] max-w-4xl my-0 mx-auto p-8 bg-white relative border border-gray-300">
      <main className="flex flex-col justify-center items-center w-full">
        <Avatar avatar={userInfo?.avatar} fetchUserInfo={fetchUserInfo} />
        <FormChangeUserData fetchUserInfo={fetchUserInfo} userInfo={userInfo} />
        <Link
          className="btn btn-primary text-center xs:w-1/2 sm:w-1/2 lg:w-1/3 lg:max-w-464px gap-y-2 mt-3.5"
          to={RoutePaths.CHANGE_PASSWORD}
        >
          Изменить пароль
        </Link>
        <button
          className="btn btn-danger xs:w-1/2 sm:w-1/2 lg:w-1/3 lg:max-w-464px gap-y-2 mt-3.5"
          onClick={onLogout}
        >
          Выйти из профиля
        </button>
      </main>
    </div>
  );
};
