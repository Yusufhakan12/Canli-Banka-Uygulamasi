import {combineReducers, createStore} from 'redux';
import {favoriteReducer} from './store/reducers';
import {createLogger} from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
const rootReducer = combineReducers({
  fav: favoriteReducer,
  // OtherReducer
});
export type RootState = ReturnType<typeof rootReducer>;
const store=createStore(rootReducer);
export default store;

