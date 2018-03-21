import API from '../../../api';
import { addLog } from '../../App/reducer';

const SEARCH_HEROES = 'APP/DASHBOARD/SEARCH_HEROES';
const SEARCH_HEROES_SUCCEEDED = 'APP/DASHBOARD/SEARCH_HEROES_SUCCEEDED';
const SEARCH_HEROES_FAILED = 'APP/DASHBOARD/SEARCH_HEROES_FAILED';

export default {
  [SEARCH_HEROES]: () => ({
    heroesFound: [],
    loading: true,
  }),
  [SEARCH_HEROES_SUCCEEDED]: ({ heroesFound }) => ({
    heroesFound,
    loading: false,
  }),
  [SEARCH_HEROES_FAILED]: () => ({
    loading: false,
  }),
};

export function searchHeroes(term) {
  return async (dispatch) => {
    dispatch({ type: SEARCH_HEROES });

    try {
      const data = term ? await API.heroes.search(term) : [];
      dispatch(searchHeroesSucceeded(data));
      dispatch(addLog(`found heroes matching "${term}"`));
    } catch (e) {
      dispatch(searchHeroesFailed());
      dispatch(addLog(`searchHeroes failed: ${e.message}`));
    }
  };
}

export function searchHeroesSucceeded(data) {
  return {
    type: SEARCH_HEROES_SUCCEEDED,
    heroesFound: data,
  };
}

export function searchHeroesFailed() {
  return { type: SEARCH_HEROES_FAILED };
}
