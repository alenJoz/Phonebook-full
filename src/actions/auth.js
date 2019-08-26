import { AUTH } from '../constants';
import { history } from '../routers/AppRouter';
import { loginService } from '../services/authService';
import { contactListService } from '../services/contactService';
import { resetContacts } from './contacts';
import { resetContact } from './contact';
import { resetSearch } from './search';

export const login = payload => ({
  type: AUTH.LOGIN,
  payload
});

export const logout = () => ({
  type: AUTH.LOGOUT
});

export const startLogin = payload => {
  return dispatch => {
    loginService(dispatch, payload);
  };
};

export const startLogout = () => {
  return dispatch => {
    try {
      localStorage.removeItem('auth');
      dispatch(logout());
      dispatch(resetContacts());
      dispatch(resetContact());
      dispatch(resetSearch());
      history.push('/');
    } catch (e) {
      console.error(e);
    }
  };
};

export const startSetAuth = () => {
  return dispatch => {
    try {
      const json = localStorage.getItem('auth');
      const data = JSON.parse(json);
      if (data) {
        dispatch(login(data));
        contactListService(dispatch);
      }
    } catch (e) {
      console.error(e);
    }
  };
};
