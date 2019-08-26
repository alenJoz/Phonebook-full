import { AUTH } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH.LOGIN:
      return {
        ...action.payload
      };
    case AUTH.LOGOUT:
      return {};
    default:
      return state;
  }
};
