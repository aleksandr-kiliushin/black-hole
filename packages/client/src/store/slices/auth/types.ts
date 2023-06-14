import { TUser } from '@app-types/TUser';

export type TAuthState = {
  authorizedUser: TUser | null;
  isInitiated: boolean;
};
