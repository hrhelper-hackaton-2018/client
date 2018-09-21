import React from 'react';
import AppRouter from '../routes/AppRouter';
import { Provider } from 'react-redux';
import createStore from '../redux/store';
import { userActions } from '../redux/user';
import apiAdapter from '../ApiAdapter';

const store = createStore();

apiAdapter
  .me()
  .then(r => r.data)
  .then(user => {
    store.dispatch(userActions.setUser(user));
  })
  .catch(e => console.log(e));

const App = () => (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);

export default App;
