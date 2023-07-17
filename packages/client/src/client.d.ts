import TStoreState from './store/store';

declare const __SERVER_PORT__: number;

declare global {
  interface Window {
    initialState?: TStoreState;
  }
}
