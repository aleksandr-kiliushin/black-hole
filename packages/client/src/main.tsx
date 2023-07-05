import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@components/ErrorBoundary';

import { App } from './App';
import './index.css';
import { store } from './store';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceworker.js');
}

const rootNode = document.querySelector('#root');

if (rootNode === null) {
  throw new Error();
}

hydrateRoot(
  rootNode,
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
