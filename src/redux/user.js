import autodux from 'autodux';

export const user = autodux({
  slice: 'user',
  initial: {
    role: null,
    loggedIn: false,
    userName: '',
    email: ''
  },
  actions: {
    setUser: (state, payload) => ({
      role: payload.role,
      loggedIn: true,
      userName: payload.userName,
      email: payload.email
    })
  }
});

export const userActions = user.actions;
export const userReducer = user.reducer;
