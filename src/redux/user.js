import autodux from 'autodux';

const user = autodux({
  slice: 'user',
  initial: {
    role: null,
    loggedIn: false
  },
  actions: {
    setUser: (state, payload) => ({ role: payload.role, loggedIn: true })
  }
});

export const userActions = user.actions;
export const userReducer = user.reducer;
