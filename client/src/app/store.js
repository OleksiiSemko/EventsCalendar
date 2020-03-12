import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function setupStore() {
  return createStore(rootReducer,
    composeEnhancers(
      applyMiddleware(thunk, loggerMiddleware),
    ))
}