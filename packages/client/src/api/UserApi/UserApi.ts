import axios, { AxiosResponse } from 'axios';

import { API_BASE_URL } from '@constants';

import { TChangePassword, TPasswordResponse, TUser, TUserResponse } from './types';

export const baseAxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

const changeAvatar = (data: FormData) => {
  return baseAxiosInstance.put('/user/profile/avatar', data);
};

const changeUserProfile = (data: TUser): Promise<AxiosResponse<TUserResponse>> => {
  return baseAxiosInstance.put('/user/profile', data);
};

const changeUserPassword = (data: TChangePassword): Promise<AxiosResponse<TPasswordResponse>> => {
  return baseAxiosInstance.put('/user/password', data);
};

export const UserApi = {
  changeAvatar,
  changeUserProfile,
  changeUserPassword,
};
