import { AxiosResponse } from 'axios';

export type TSignInDto = {
  login: string;
  password: string;
};

export type TSignUpDto = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type TSignUpResponse = { id: number };

export interface IAuthApi {
  signIn(dto: TSignInDto): Promise<AxiosResponse<Record<string, never>>>;

  signOut(): Promise<AxiosResponse<Record<string, never>>>;

  signUp(dto: TSignUpDto): Promise<AxiosResponse<TSignUpResponse>>;
}
