import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import gameReducer from './reducer/index';

// const rootReducer = combineReducers({
//   step: stepReducer,
// });
// const reducer = (state = {}, action) => state;
const store = createStore(gameReducer, devToolsEnhancer());

export default store;
