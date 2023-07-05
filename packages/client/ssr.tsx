import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import { store } from '@store/store';

import { App } from './src/App';

export const render = () => {
  return renderToString(
    <StaticRouter location="/game-start">
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );
};
