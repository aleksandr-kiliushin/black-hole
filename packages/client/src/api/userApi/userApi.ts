import { AxiosResponse } from 'axios';

import { baseAxiosInstance } from '@api/baseAxiosInstance';

import { TChangePassword, TPasswordResponse, TUser, TUserResponse } from './types';

const changeAvatar = (data: FormData) => {
  return baseAxiosInstance.put('/user/profile/avatar', data);
};

const changeUserProfile = (data: TUser): Promise<AxiosResponse<TUserResponse>> => {
  return baseAxiosInstance.put('/user/profile', data);
};

const changeUserPassword = (data: TChangePassword): Promise<AxiosResponse<TPasswordResponse>> => {
  return baseAxiosInstance.put('/user/password', data);
};

export const userApi = {
  changeAvatar,
  changeUserProfile,
  changeUserPassword,
};
