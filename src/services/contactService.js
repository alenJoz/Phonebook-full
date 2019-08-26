import { showLoader, hideLoader } from '../actions/ui';
import { axiosGet, axiosPost } from '../utils/api';
import { setContacts, addContact, editContact } from '../actions/contacts';
import { setContact } from '../actions/contact';
import { history } from '../routers/AppRouter';

export const contactListService = async dispatch => {
  dispatch(showLoader());

  const res = await axiosGet('http://www.mocky.io/v2/5d272a9e320000570071b99c');
  dispatch(hideLoader());

  dispatch(setContacts(res.data.data.contacts));
};

export const contactItemService = async (dispatch, id) => {
  dispatch(showLoader());

  const res = await axiosPost(
    'http://www.mocky.io/v2/5d273751320000682a71b9f6',
    {
      id
    }
  );

  dispatch(hideLoader());

  dispatch(setContact(res.data.data));
};

export const contactAddService = async (dispatch, payload) => {
  dispatch(showLoader());

  const res = await axiosPost(
    'http://www.mocky.io/v2/5d28364b2c0000cf2f3ed86d',
    payload
  );

  dispatch(hideLoader());

  if (res.status === 200) {
    const id = Math.floor(Math.random() * 1000 + 1);
    dispatch(addContact({ ...payload, id }));

    history.push('/contact/' + id);
  }
};

export const contactEditService = async (dispatch, id, payload) => {
  dispatch(showLoader());

  const res = await axiosPost(
    'http://www.mocky.io/v2/5d28364b2c0000cf2f3ed86d',
    { id, ...payload }
  );

  dispatch(hideLoader());

  if (res.status === 200) {
    dispatch(editContact(id, payload));

    history.push('/contact/' + id);
  }
};
