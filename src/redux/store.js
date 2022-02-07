import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger, promise];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;