import { combineReducers } from 'redux';
import { RootState } from './state';
import { serviceReducer } from './services';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  services: serviceReducer
});
