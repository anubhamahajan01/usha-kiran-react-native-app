import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import AuthReducer from './../Reducers/AuthReducer';

export default () => {
  const rootReducer = combineReducers({
    auth: AuthReducer,
  });

  return configureStore(rootReducer);
};
