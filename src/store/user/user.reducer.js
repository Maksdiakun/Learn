import constants from "../constans";

const initState = {
  authorized: false,
  checked_token: true,
  info: {
    email: null,
    first_name: null,
    last_name: null,
    id: null,
  },
};

const user = (state = initState, action) => {
  switch (action.type) {
    case constants.SIGN_IN_SUCCESS:
      return {
        ...state,
        checked_token: false,
        authorized: true,
      };
    case constants.USER_CHECK_SUCCESS:
      return {
        ...state,
        checked_token: false,
        authorized: true,
      };
    case constants.USER_CHECK_FAILED:
      return {
        ...initState,
        checked_token: true,
        authorized: false,
      };
    case constants.USER_ID_SUCCESS:
      return {
        ...state,
        info: action.payload,
        authorized: true,
      };
    case constants.SIGN_OUT_SUCCESS:
      return initState;
    default:
      return state;
  }
};
export default user;
