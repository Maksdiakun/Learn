import { call, put } from "redux-saga/effects";
import constants from "../constans";
import API from "../../API";

export function* getViewedVideo() {
  yield put({
    type: constants.GET_VIEWED_FETCHED,
  });
  try {
    const { data } = yield call(API.getViewedVideo);
    yield put({
      type: constants.GET_VIEWED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: constants.GET_VIEWED_ERROR,
      payload: error,
    });
  }
}

export function* getViewedOnPagination({ payload }) {
  yield put({
    type: constants.GET_VIEWED_PAGINATION_FETCHED,
  });

  try {
    const { data } = yield call(API.getViewedVideo, payload);
    yield put({
      type: constants.GET_VIEWED_PAGINATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: constants.GET_VIEWED_PAGINATION_ERROR,
      payload: error,
    });
  }
}
