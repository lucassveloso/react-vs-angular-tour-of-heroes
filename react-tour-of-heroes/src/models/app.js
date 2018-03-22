export default {
  state: {
    messages: [],
  },
  reducers: {
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
