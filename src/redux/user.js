import autodux from 'autodux';

const user = autodux({
  slice: 'user',
  initial: {
    role: null,
    loggedIn: false,
    userName: ''
  },
  actions: {
    setUser: (state, payload) => ({
      role: payload.role,
      loggedIn: true,
      userName: payload.userName
    })
  }
});

export const userActions = user.actions;
export const userReducer = user.reducer;
