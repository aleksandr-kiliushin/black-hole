import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { TRootState } from '@store/index';

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
