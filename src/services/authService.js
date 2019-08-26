import axios from 'axios';
import { showLoader, hideLoader } from '../actions/ui';
import { login } from '../actions/auth';
import { history } from '../routers/AppRouter';
import { contactListService } from './contactService';

export const loginService = async (dispatch, payload) => {
  dispatch(showLoader());

  const res = await axios.post(
    'http://www.mocky.io/v2/5d26d0db320000610071b6a3',
    payload
  );
  dispatch(hideLoader());

  dispatch(login(res.data.data));

  contactListService(dispatch);

  const json = JSON.stringify(res.data.data);
  localStorage.setItem('auth', json);

  history.push('/');
};
