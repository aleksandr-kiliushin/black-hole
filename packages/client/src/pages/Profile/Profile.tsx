import { TUser } from '@app-types/TUser';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@store/hooks';

import { Navbar } from '@components/Navbar';

import { AuthApi } from '@src/api/Auth/Auth';
import { RoutePaths } from '@src/providers/Router/AppRouter/constants';
import { authActions } from '@src/store/slices/auth/auth';

import { Avatar } from './Avatar';
import { FormChangeUserData } from './FormChangeUserData';
import { Layout } from './Layout';

const authApi = new AuthApi();

export const Profile = () => {
  const [userInfo, setUserInfo] = useState<TUser | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userInfo) {
      fetchUserInfo();
    }
  }, [userInfo]);

  const onLogout = () => {
    authApi.SignOut();
    dispatch(authActions.logout());
  };

  const fetchUserInfo = async () => {
    const response = await authApi.GetUserInfo();
    setUserInfo(response.data);
  };

  const handleChangePassword = () => {
    navigate(RoutePaths.CHANGE_PASSWORD);
  };

  return (
    <>
      <Navbar />
      <Layout>
        <main className="flex flex-col justify-center items-center w-full">
          {userInfo && (
            <>
              <Avatar avatar={userInfo.avatar} fetchUserInfo={fetchUserInfo} />
              <FormChangeUserData fetchUserInfo={fetchUserInfo} userInfo={userInfo} />
              <button
                className="btn-primary text-white btn-primary 
                xs:w-1/2 sm:w-1/2 lg:w-1/3 lg:max-w-464px 
                gap-y-2 mt-3.5 focus:ring-red-400 
                focus:ring-opacity-75"
                onClick={handleChangePassword}
              >
                Изменить пароль
              </button>
              <button
                className="text-white btn-primary 
                bg-red-400 hover:bg-red-600 xs:w-1/2 
                sm:w-1/2 lg:w-1/3 lg:max-w-464px 
                gap-y-2 mt-3.5 focus:ring-red-400 
                focus:ring-opacity-75"
                onClick={onLogout}
              >
                Выйти из профиля
              </button>
            </>
          )}
        </main>
      </Layout>
    </>
  );
};
