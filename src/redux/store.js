import { createStore, combineReducers } from 'redux';
import { userReducer } from './user';

export default () => {
  const store = createStore(
    combineReducers({
      user: userReducer
    })
  );

  return store;
};
