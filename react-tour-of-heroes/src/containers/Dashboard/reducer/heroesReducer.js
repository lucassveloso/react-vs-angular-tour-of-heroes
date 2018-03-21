import API from '../../../api';
import { addLog } from '../../App/reducer';

const FETCH_HEROES = 'APP/DASHBOARD/FETCH_HEROES';
const FETCH_HEROES_SUCCEEDED = 'APP/DASHBOARD/FETCH_HEROES_SUCCEEDED';
const FETCH_HEROES_FAILED = 'APP/DASHBOARD/FETCH_HEROES_FAILED';

export default {
  [FETCH_HEROES]: () => ({
    heroes: [],
    loading: true,
  }),
  [FETCH_HEROES_SUCCEEDED]: ({ heroes }) => ({
    heroes,
    loading: false,
  }),
  [FETCH_HEROES_FAILED]: () => ({
    loading: false,
  }),
};

export function fetchHeroes() {
  return async (dispatch) => {
    dispatch({ type: FETCH_HEROES });

    try {
      const data = await API.heroes.all();
      dispatch(fetchHeroesSucceeded(data));
      dispatch(addLog('fetched heroes'));
    } catch (e) {
      dispatch(fetchHeroesFailed());
      dispatch(addLog(`fetchHeroes failed: ${e.message}`));
    }
  };
}

export function fetchHeroesSucceeded(data) {
  return {
    type: FETCH_HEROES_SUCCEEDED,
    heroes: data,
  };
}

export function fetchHeroesFailed() {
  return { type: FETCH_HEROES_FAILED };
}
