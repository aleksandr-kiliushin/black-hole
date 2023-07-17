import TStoreState from './store/store';

declare const __SERVER_PORT__: number;

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Window {
    initialState?: TStoreState;
  }
}
