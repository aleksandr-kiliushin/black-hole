export type TUser = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

export type TUserResponse = Omit<TUser, 'display_name'> & {
  id: number;
  display_name: string | null;
  avatar: string | null;
  status: null;
};

export type TChangePassword = {
  oldPassword: string;
  newPassword: string;
};

export type TPasswordResponse = {
  reason: 'string';
};
