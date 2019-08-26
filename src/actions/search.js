import { SEARCH } from '../constants';

export const setSearchContact = payload => ({
  type: SEARCH.SET_SEARCH_CONTACT,
  payload
});

export const resetSearch = () => ({
  type: SEARCH.RESET_SEARCH
});
