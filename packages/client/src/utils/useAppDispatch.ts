import { useDispatch } from 'react-redux';

import { TAppDispatch } from '@store/index';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
