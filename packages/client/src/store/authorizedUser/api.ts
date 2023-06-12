import { TUser } from '@app-types/TUser';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '@constants';

import { TSignInPayload, TSignUpPayload } from './types';

export const authorizedUserApi = createApi({
  reducerPath: 'authorizedUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL, credentials: 'include' }),
  tagTypes: ['AUTHORIZED_USER_DATA'],
  endpoints: (builder) => ({
    getAuthorizedUser: builder.query<TUser, void>({
      query: () => '/auth/user',
      providesTags: ['AUTHORIZED_USER_DATA'],
    }),
    signUp: builder.mutation<void, TSignUpPayload>({
      query: (arg) => ({ url: '/auth/signup', method: 'POST', body: arg }),
    }),
    signIn: builder.mutation<void, TSignInPayload>({
      query: (arg) => ({ url: '/auth/signin', method: 'POST', body: arg }),
      invalidatesTags: ['AUTHORIZED_USER_DATA'],
    }),
    logOut: builder.mutation<void, void>({
      query: () => ({ url: '/auth/logout', method: 'POST' }),
      invalidatesTags: ['AUTHORIZED_USER_DATA'],
    }),
  }),
});

export const {
  useGetAuthorizedUserQuery,
  useSignInMutation,
  useLogOutMutation,
  useSignUpMutation,
} = authorizedUserApi;
