import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import mainReducer from './reducers/mainReducer';
import descriptionReducer from './reducers/descriptionReducer';

export const reducers = combineReducers({
  mainReducer,
  descriptionReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
