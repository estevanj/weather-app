
import { createStore, applyMiddleware, compose } from 'redux'
import { city } from './../reducers/city'
import thunk from 'redux-thunk';

const initialState = {}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(city,initialState, composeEnhancers(applyMiddleware(thunk)));
