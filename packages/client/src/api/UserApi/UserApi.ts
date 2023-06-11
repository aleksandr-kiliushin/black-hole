import { AxiosResponse } from 'axios';

import { instance as axios } from '../constants';
import { TChangePassword, TPasswordResponse, TUser, TUserResponse } from './types';

const changeAvatar = (data: FormData) => {
  return axios.put('/user/profile/avatar', data);
};

const changeUserProfile = (data: TUser): Promise<AxiosResponse<TUserResponse>> => {
  return axios.put('/user/profile', data);
};

const changeUserPassword = (data: TChangePassword): Promise<AxiosResponse<TPasswordResponse>> => {
  return axios.put('/user/password', data);
};

export const UserApi = {
  changeAvatar,
  changeUserProfile,
  changeUserPassword,
};
