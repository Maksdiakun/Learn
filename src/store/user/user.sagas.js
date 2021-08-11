import { call, put, select } from "redux-saga/effects";
import constants from "../constans";
import API from "../../API";
import { getUserId as getUserIdAction } from "./user.actions";

export function* signUp(action) {
  try {
    const response = yield call(API.signUp, action.payload.user);
    yield put({
      type: constants.MESSAGE,
      payload: response.response,
    });
    action.payload.history.push("/auth/signin");
  } catch (error) {
    yield put({
      type: constants.MESSAGE,
      payload: error.message,
    });
  }
}

export function* signIn(action) {
  try {
    let response = yield call(API.signIn, action.payload);
    yield put({
      type: constants.SIGN_IN_SUCCESS,
      payload: response.data,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    yield put(getUserIdAction());
  } catch (error) {
    console.log(error);
  }
}
export function* signInSoc({ payload }) {
  console.log("signInSoc/payload", payload);
  try {
    let response = yield call(API.signInSoc, payload);
    console.log("signInSoc", response);
    yield put({
      type: constants.SIGN_IN_SUCCESS,
      payload: response.data,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    yield put(getUserIdAction());
  } catch (error) {
    console.log(error);
  }
}
export function* signOut() {
  try {
    yield call(API.signOut);
    yield put({
      type: constants.SIGN_OUT_SUCCESS,
    });
    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
}
export function* userCheck() {
  const {
    user: { checked_token },
  } = yield select();
  try {
    yield call(API.userCheck);
    console.log("userCheck/seccc");

    yield put({
      type: constants.USER_CHECK_SUCCESS,
    });
    yield put({
      type: "SECOND_QUERY",
      paylaod: true,
    });
  } catch (error) {
    if (checked_token) {
      yield put({
        type: constants.REFRESH_TOKEN,
      });
    } else {
      yield put({
        type: constants.USER_CHECK_FAILED,
      });
    }
  }
}

export function* refreshToken() {
  const { user } = yield select();
  try {
    const res = yield call(API.refreshToken);
    localStorage.setItem("user", JSON.stringify(res.data));
    yield put({
      type: "SECOND_QUERY",
      payload: false,
    });
    yield put({
      type: constants.USER_CHECK,
    });
  } catch (error) {
    console.log("refreshToken error", error);
    console.log("refreshToken error", error.response);
    console.log("refreshToken error", error.result);

    yield put({
      type: constants.USER_CHECK_FAILED,
    });
  }
}

export function* getUserId() {
  try {
    let { data } = yield call(API.getUserId);
    console.log(data);
    yield put({
      type: constants.USER_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.response);
  }
}
export function* resetPass({ payload }) {
  try {
    let res = yield call(API.resetPass, payload);
  } catch (error) {
    console.log(error.response);
  }
}
