import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import uiReducer from '../reducers/ui';
import contactsReducer from '../reducers/contacts';
import contactReducer from '../reducers/contact';
import searchReducer from '../reducers/search';

const composeEnhancers =
  process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(
  combineReducers({
    auth: authReducer,
    ui: uiReducer,
    contacts: contactsReducer,
    contact: contactReducer,
    search: searchReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
