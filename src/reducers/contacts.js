import { CONTACTS } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case CONTACTS.SET_CONTACTS:
      return [...action.payload];
    case CONTACTS.RESET_CONTACTS:
      return [];
    case CONTACTS.ADD_CONTACT:
      return [...state, action.contact];
    case CONTACTS.EDIT_CONTACT:
      return state.map(contact => {
        if (contact.id === action.contact.id) {
          return action.contact;
        }
        return contact;
      });
    default:
      return state;
  }
};
