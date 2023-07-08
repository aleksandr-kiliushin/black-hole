import { baseAxiosInstance } from '@api/baseAxiosInstance';

import { UserRepository } from '@src/repository/UserRepository/UserRepository';
import { IUserRepository } from '@src/repository/UserRepository/types';

import { IAuthApi, TSignInDto, TSignUpDto, TSignUpResponse } from './types';

class AuthApi implements IAuthApi {
  constructor(private _userRepository: IUserRepository) {}

  getUserInfo() {
    return this._userRepository.getCurrentUser();
  }

  signIn(dto: TSignInDto) {
    return baseAxiosInstance.post<Record<string, never>>('/auth/signin', dto);
  }

  signOut() {
    return baseAxiosInstance.post<Record<string, never>>('/auth/logout');
  }

  signUp(dto: TSignUpDto) {
    return baseAxiosInstance.post<TSignUpResponse>('/auth/signup', dto);
  }
}

export const authApi = new AuthApi(new UserRepository());
