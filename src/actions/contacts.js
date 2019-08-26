import { CONTACTS } from '../constants';
import {
  contactAddService,
  contactEditService
} from '../services/contactService';

export const setContacts = payload => ({
  type: CONTACTS.SET_CONTACTS,
  payload
});

export const resetContacts = () => ({
  type: CONTACTS.RESET_CONTACTS
});

export const addContact = payload => ({
  type: CONTACTS.ADD_CONTACT,
  contact: {
    id: payload.id,
    name: payload.name
  }
});

export const editContact = (id, payload) => ({
  type: CONTACTS.EDIT_CONTACT,
  contact: {
    id,
    name: payload.name
  }
});

export const startAddContact = payload => dispatch => {
  contactAddService(dispatch, payload);
};

export const startEditContact = (id, payload) => dispatch => {
  contactEditService(dispatch, id, payload);
};
