import { AxiosResponse } from 'axios';

import { baseAxiosInstance } from '@api/baseAxiosInstance';

import { UserRepository } from '@src/repository/UserRepository/UserRepository';
import { IUserRepository } from '@src/repository/UserRepository/types';

import { TChangePassword, TPasswordResponse, TUser, TUserResponse } from './types';

export interface IUserApi {
  changeAvatar(data: FormData): Promise<AxiosResponse<'OK'>>;
  changeUserProfile(data: TUser): Promise<AxiosResponse<TUserResponse>>;
  changeUserPassword(data: TChangePassword): Promise<AxiosResponse<TPasswordResponse>>;
}

export class UserApi implements IUserApi {
  constructor(private _userRepository: IUserRepository) {}

  changeAvatar(data: FormData): Promise<AxiosResponse<'OK'>> {
    return baseAxiosInstance.put<'OK'>('/user/profile/avatar', data);
  }

  changeUserPassword(data: TChangePassword): Promise<AxiosResponse<TPasswordResponse>> {
    return baseAxiosInstance.put<TPasswordResponse>('/user/profile', data);
  }

  changeUserProfile(data: TUser): Promise<AxiosResponse<TUserResponse>> {
    return baseAxiosInstance.put<TUserResponse>('/user/profile', data);
  }
}

export const userApi = new UserApi(new UserRepository());
