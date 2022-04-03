import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import urlReducer from './shortUrlData/shortUrl';

const reducer = combineReducers({
  urlReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
