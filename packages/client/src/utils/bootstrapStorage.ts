import { getAuthUserInfo } from '@store/slices/auth/authSlice';
import { TAppDispatch } from '@store/store';

export async function bootstrapStorage(dispatch: TAppDispatch) {
  await dispatch(getAuthUserInfo());
}
