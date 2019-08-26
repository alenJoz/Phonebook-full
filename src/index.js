import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import { axiosSetup } from './utils/api';
import { startSetAuth } from './actions/auth';

// UIKit
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import './styles/styles.scss';

// loads the Icon plugin
UIkit.use(Icons);

axiosSetup();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


// Automatically loged in user if access token is stored in localstorage
// This help to prevent logout when user refresh page
store.dispatch(startSetAuth());

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
