import { SEARCH } from '../constants';

const searchReducerDefaultState = {
  contactSearchTerm: ''
};

export default (state = searchReducerDefaultState, action) => {
  switch (action.type) {
    case SEARCH.SET_SEARCH_CONTACT:
      return {
        ...state,
        contactSearchTerm: action.payload
      };
    case SEARCH.RESET_SEARCH:
      return searchReducerDefaultState;
    default:
      return state;
  }
};
