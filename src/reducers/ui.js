import { UI } from '../constants';

const uiReducerDefaultState = {
  showLoader: false
};

export default (state = uiReducerDefaultState, action) => {
  switch (action.type) {
    case UI.SHOW_LOADER:
      return {
        ...state,
        showLoader: true
      };
    case UI.HIDE_LOADER:
      return {
        ...state,
        showLoader: false
      };
    default:
      return state;
  }
};
