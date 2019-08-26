import { CONTACT } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case CONTACT.SET_CONTACT:
      return { ...action.payload };
    case CONTACT.RESET_CONTACT:
      return {};
    default:
      return state;
  }
};
