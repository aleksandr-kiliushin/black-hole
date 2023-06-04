import { IUser } from '../types';

export interface IFormChangeUserDataProps {
  userInfo: IUser;
  fetchUserInfo: () => void;
}

export interface IFormChangeUserData {
  firstName: string;
  secondName: string;
  displayName: string;
  login: string;
  email: string;
  phone: string;
}

export interface IUserData
  extends Omit<IUser, 'id' | 'display_name' | 'avatar'> {
  display_name: string;
}
