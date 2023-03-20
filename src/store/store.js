import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers } from 'redux';

import { authReducer } from './reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
});
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
