export type TSignUpPayload = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type TSignInPayload = {
  login: string;
  password: string;
};
