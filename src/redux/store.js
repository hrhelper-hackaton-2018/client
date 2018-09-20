import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {
  devToolsEnhancer,
  composeWithDevTools
} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './user';

export default () => {
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(
    combineReducers({
      user: userReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
