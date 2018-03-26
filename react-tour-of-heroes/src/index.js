import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import './globalStyles';

import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './configureStore';
import App from './containers/App';

render(
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
