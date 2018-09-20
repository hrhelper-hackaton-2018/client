import React from 'react';
import AppRouter from '../routes/AppRouter';
import { Provider } from 'react-redux';
import createStore from '../redux/store';
import { userActions } from '../redux/user';

const store = createStore();
// const userString = localStorage.getItem('user');
// if (userString !== '') {
//   store.dispatch(userActions.setUser(JSON.parse(userString)));
// }

const App = () => (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);

export default App;
