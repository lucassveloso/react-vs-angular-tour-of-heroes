export default {
  state: {
    messages: [],
    loading: false,
  },
  reducers: {
    startLoading(state) {
      return { ...state, loading: true };
    },
    finishLoading(state) {
      return { ...state, loading: false };
    },
    addMessage(state, message) {
      return {
        ...state,
        messages: [...state.messages, message ],
      };
    },
    clearMessages(state) {
      return {
        ...state,
        messages: [],
      };
    },
  },
};
