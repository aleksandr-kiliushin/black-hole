import { AxiosError, isAxiosError } from 'axios';

export function isNetworkError(error: unknown): error is AxiosError & {
  response: { data: { reason: string } };
} {
  return error && isAxiosError(error) && error.response?.status && error.response.data.reason;
}
