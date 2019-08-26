import { CONTACT } from '../constants';
import { contactItemService } from '../services/contactService';

export const setContact = payload => ({
  type: CONTACT.SET_CONTACT,
  payload
});

export const resetContact = () => ({
  type: CONTACT.RESET_CONTACT
});

export const startSetContact = id => dispatch => {
  contactItemService(dispatch, id);
};
