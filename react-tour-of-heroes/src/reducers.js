import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dashboardReducer from './containers/Dashboard/reducer';
import appReducer from './containers/App/reducer';

export default combineReducers({
  routing: routerReducer,
  dashboard: dashboardReducer,
  app: appReducer,
});
