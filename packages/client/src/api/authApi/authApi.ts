import { baseAxiosInstance } from '@api/baseAxiosInstance';

import { IAuthApi, TSignInDto, TSignUpDto, TSignUpResponse } from './types';

class AuthApi implements IAuthApi {
  getUserInfo() {
    return baseAxiosInstance.get('/auth/user');
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

export const authApi = new AuthApi();
