import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import { createStore } from '@store/store';

import { App } from './src/App';

export const render = (url: string) => {
  const store = createStore();
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
