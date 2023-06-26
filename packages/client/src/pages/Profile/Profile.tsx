import { TUser } from '@app-types/TUser';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { authActions } from '@store/slices/auth/authSlice';

import { authApi } from '@api/authApi';

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
    <div className="relative page-container overlay my-6">
      <div className="flex flex-col justify-center items-center w-full">
        <Avatar avatar={userInfo?.avatar} fetchUserInfo={fetchUserInfo} />
        <FormChangeUserData fetchUserInfo={fetchUserInfo} userInfo={userInfo} />
        <Link
          className="btn btn-primary text-center w-full max-w-md gap-y-2 mt-3.5"
            to={RoutePaths.CHANGE_PASSWORD}
          >
            Изменить пароль
          </Link>
          <button className="btn btn-danger w-full max-w-md gap-y-2 mt-3.5" onClick={onLogout}>
            Выйти из профиля
          </button>

      </div>
    </div>
  );
};
