import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import { createStore } from '@store/store';

import { UserService } from '@api/Services/UserService/UserService';

import { bootstrapStorage } from '@utils/bootstrapStorage';

import { IAppRepos, IAppServices } from '@src/repository/types';

import { App } from './src/App';

export const render = async (url: string, { userRepo }: IAppRepos) => {
  const services: IAppServices = { userService: new UserService(userRepo) };
  const store = createStore(services);

  await bootstrapStorage(store.dispatch);

  const initialState = store.getState();

  const renderResult = renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  return [renderResult, initialState];
};
