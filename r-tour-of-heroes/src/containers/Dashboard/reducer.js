import API from '../../api';
import { addLog } from '../App/reducer';

const FETCH = 'APP/DASHBOARD/FETCH';
const FETCH_SUCCEEDED = 'APP/DASHBOARD/FETCH_SUCCEEDED';
const FETCH_FAILED = 'APP/DASHBOARD/FETCH_FAILED';

const initialState = {
  heroes: [],
  loading: false,
};

export default (state = initialState, { type, ...action }) => {
  const reducer = {
    [FETCH]: () => ({
      heroes: [],
      loading: true,
    }),
    [FETCH_SUCCEEDED]: ({ heroes }) => ({
      heroes,
      loading: false,
    }),
  };

  return Object.assign({}, state, reducer[type] && { ...state, ...reducer[type](action) } || state);
}

export function fetch() {
  return async (dispatch) => {
    dispatch({ type: FETCH });

    try {
      const data = await API.heroes.all();
      dispatch(fetchSucceeded(data));
      dispatch(addLog('fetched heroes'));
    } catch (e) {
      dispatch(fetchFailed());
    }
  };
}

export function fetchSucceeded(data) {
  return {
    type: FETCH_SUCCEEDED,
    heroes: data,
  };
}

export function fetchFailed() {
  return { type: FETCH_FAILED };
}
