import { AxiosResponse } from 'axios';

import { baseAxiosInstance } from '@api/baseAxiosInstance';

import { IUserRepository, TCurrentUserResponse } from './types';

export class UserRepository implements IUserRepository {
  async getCurrentUser(): Promise<AxiosResponse<TCurrentUserResponse>> {
    return baseAxiosInstance.get<TCurrentUserResponse>('/auth/user');
  }
}
