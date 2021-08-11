import { call, put } from "redux-saga/effects";
import constants from "../constans";
import API from "../../API";

export function* fetchLanguages() {
  try {
    const {
      data: { results },
    } = yield call(API.getAllLanguages);
    yield put({
      type: constants.LANGUAGES_SUCCESS,
      payload: results,
    });
  } catch (error) {
    yield put({
      type: constants.MESSAGE,
    });
  }
}
