const ADD_LOG = 'APP/ADD_LOG';
const CLEAR_LOG = 'APP/CLEAR_LOG';

const initialState = {
  logs: [],
};

export default (state = initialState, { type, ...action }) => {
  const reducer = {
    [ADD_LOG]: ({ message }) => ({
      logs: [...state.logs, message ],
    }),
    [CLEAR_LOG]: () => ({
      logs: [],
    }),
  };

  return Object.assign({}, state, reducer[type] && { ...state, ...reducer[type](action) } || state);
}

export function addLog(message) {
  return { type: ADD_LOG, message };
}

export function clearLog() {
  return { type: CLEAR_LOG };
}
