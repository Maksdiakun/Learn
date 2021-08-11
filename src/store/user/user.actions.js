import constants from "../constans";

export const signUp = (user, history) => ({
  type: constants.SIGN_UP,
  payload: { user, history },
});

export const signIn = (user) => ({
  type: constants.SIGN_IN,
  payload: user,
});
export const signInSoc = (type, token) => ({
  type: constants.SIGN_IN_SOC,
  payload: {
    token,
    type,
  },
});
export const userCheck = (user) => ({
  type: constants.USER_CHECK,
  payload: user,
});

export const signOut = () => {
  return {
    type: constants.SIGN_OUT,
  };
};
export const getUserId = () => ({
  type: constants.USER_ID_REQUEST,
});
export const resetPassword = (email) => ({
  type: constants.RESET_PASS,
  payload: email,
});
