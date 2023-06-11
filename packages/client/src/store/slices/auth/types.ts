export type TUser = {
  id: number;
  login: string;
  first_name: string;
  second_name: string;
  display_name: null | string;
  avatar: null | string;
  email: string;
  phone: string;
};

export type TUserSchema = {
  authData: TUser | null;
  isInited: boolean;
};
