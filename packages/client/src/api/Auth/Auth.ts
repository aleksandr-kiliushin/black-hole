import { AxiosInstance, AxiosResponse } from 'axios';

import { instance as defaultInstance } from '../constants';
import { TSignInDto, TSignUpDto, TSignUpResponse } from './types';

export class AuthApi {
  private readonly instance: AxiosInstance;

  constructor(ctorInstance?: AxiosInstance) {
    this.instance = ctorInstance ?? defaultInstance;
  }

  GetUserInfo() {
    return this.instance.get('/auth/user');
  }

  SignIn(dto: TSignInDto): Promise<AxiosResponse<Record<string, never>>> {
    return this.instance.post<Record<string, never>>('/auth/signin', dto);
  }

  SignOut(): Promise<AxiosResponse<Record<string, never>>> {
    return this.instance.post<Record<string, never>>('/auth/logout');
  }

  SignUp(dto: TSignUpDto): Promise<AxiosResponse<TSignUpResponse>> {
    return this.instance.post<TSignUpResponse>('/auth/signup', dto);
  }
}

export const authApi = new AuthApi();
