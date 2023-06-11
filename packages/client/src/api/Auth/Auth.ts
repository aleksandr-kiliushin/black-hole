import { AxiosResponse } from 'axios';

import { baseAxiosInstance } from '@src/api/baseAxiosInstance';

import { TSignInDto, TSignUpDto, TSignUpResponse } from './types';

export class AuthApi {
  GetUserInfo() {
    return baseAxiosInstance.get('/auth/user');
  }

  SignIn(dto: TSignInDto): Promise<AxiosResponse<Record<string, never>>> {
    return baseAxiosInstance.post<Record<string, never>>('/auth/signin', dto);
  }

  SignOut(): Promise<AxiosResponse<Record<string, never>>> {
    return baseAxiosInstance.post<Record<string, never>>('/auth/logout');
  }

  SignUp(dto: TSignUpDto): Promise<AxiosResponse<TSignUpResponse>> {
    return baseAxiosInstance.post<TSignUpResponse>('/auth/signup', dto);
  }
}

export const authApi = new AuthApi();
