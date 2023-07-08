import { baseAxiosInstance } from '../axios/baseAxiosInstance';

export class UserRepository {
  constructor(private _cookieHeader: string | undefined) {}
  getCurrentUser() {
    return baseAxiosInstance.get('/auth/user', {
      headers: {
        cookie: this._cookieHeader,
      },
    });
  }
}
