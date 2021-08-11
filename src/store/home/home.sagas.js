import { call, put } from "redux-saga/effects";
import constants from "../constans";
import API from "../../API";

export function* getCategories() {
  try {
    const { data } = yield call(API.getCategories);
    yield put({
      type: constants.CATEG0RIES_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    yield put({
      type: constants.MESSAGE,
      payload: error,
    });
  }
}

export function* getSuggestedVideos() {
  try {
    const { data } = yield call(API.suggestedVideo);
    yield put({
      type: constants.SUGGESTED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.response);
    yield put({
      type: constants.MESSAGE,
      payload: error,
    });
  }
}

export function* suggestedOnPagination(action) {
  try {
    const { data } = yield call(API.suggestedVideo, action.payload);
    yield put({
      type: constants.SUGGESTED_PAGINATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: constants.MESSAGE,
      payload: error,
    });
  }
}
