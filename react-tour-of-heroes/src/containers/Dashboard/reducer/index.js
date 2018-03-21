import * as heroesReducer from './heroesReducer';
import * as searchReducer from './searchReducer';

const initialState = {
  heroes: [],
  heroesFound: [],
  loading: false,
};

export default (state = initialState, { type, ...action }) => {
  const reducer = {
    ...heroesReducer.default,
    ...searchReducer.default,
  }

  return Object.assign({}, state, reducer[type] && { ...state, ...reducer[type](action) } || state);
}

export * from './heroesReducer';
export * from './searchReducer';
