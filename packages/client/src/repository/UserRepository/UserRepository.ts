import { AxiosResponse } from 'axios';

import { baseAxiosInstance } from '@api/baseAxiosInstance';

import { IUserRepository, TCurrentUserResponse } from './types';

// TODO после перехода всех запросов на наш сервер, перестать прокидывать в baseUrl адрес нашей прокси
export class UserRepository implements IUserRepository {
  async getCurrentUser(): Promise<AxiosResponse<TCurrentUserResponse>> {
    return baseAxiosInstance.get<TCurrentUserResponse>('/auth/user', {
      baseURL: 'https://ya-praktikum.tech/api/v2',
    });
  }
}
