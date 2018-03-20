import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './configureStore';
import App from './containers/App';
import './globalStyles';

require('./favicon.ico');

const INITIAL_STATE = {};
const store = configureStore(INITIAL_STATE);
const MOUNT_NODE = document.getElementById('root');

const render = (Root) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Root />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    MOUNT_NODE
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(require('./containers/App'));
  });
}
