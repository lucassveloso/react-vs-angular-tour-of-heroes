import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { routerReducer } from 'react-router-redux';
import { init } from '@rematch/core';
import models from './models';

export const history = createHistory();

function configureStoreProd(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [ reactRouterMiddleware ];
  const reducers = { routerReducer };

  return init({
    models,
    redux: {
      initialState,
      middlewares,
      reducers,
    },
  });
}

function configureStoreDev(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [ reactRouterMiddleware ];
  const reducers = { routerReducer };

  return init({
    models,
    redux: {
      initialState,
      middlewares,
      reducers,
    },
  });

  // if (module.hot) {
  //   module.hot.accept('./models', () => {
  //     const nextReducer = require('./reducers').default; // eslint-disable-line global-require
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  // return store;
}

export default process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
