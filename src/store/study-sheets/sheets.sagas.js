import { call, put } from "redux-saga/effects";
import constants from "../constans";
import API from "../../API";

export function* savePhrase({ payload }) {
  try {
    const { data } = yield call(API.savePhrase, payload);
    yield put({
      type: constants.SAVE_PHRASE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* fetchPhrases() {
  try {
    const { data } = yield call(API.fetchStudySheets);
    yield put({
      type: constants.FETCH_PHRASES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("err");
  }
}

export function* fetchVideoPhrases({ payload }) {
  try {
    const { data } = yield call(API.fetchVideoPhrasesRequest, payload);
    let results = data.results;
    if (data.results && data.results.length > 0) {
      results = data.results[0].studysheets;
    }
    yield put({
      type: constants.FETCH_VIDEO_PHRASES_SUCCESS,
      payload: results,
    });
  } catch (error) {
    yield put({
      type: constants.MESSAGE,
      payload: error.message,
    });
  }
}
export function* deleteStudySheet({ payload }) {
  try {
    yield call(API.deleteSheets, payload.id);
    payload.video_id
      ? yield put({
          type: constants.FETCH_VIDEO_PHRASES_REQUEST,
          payload: payload.video_id,
        })
      : yield put({
          type: constants.FETCH_PHRASES_REQUEST,
        });
  } catch (error) {
    yield put({
      type: constants.MESSAGE,
      payload: error.message,
    });
  }
}
export function* searchPhrases({ payload }) {
  try {
    const { data } = yield call(API.searchPhrases, payload);
    yield put({
      type: constants.FETCH_PHRASES_SUCCESS,
      payload: data,
    });
  } catch (error) {}
}
export function* sortBy({ payload }) {
  console.log("sortBy", payload);
  try {
    const { data } = yield call(API.sortBy, payload);
    console.log("sortBy/res", data);
    yield put({
      type: constants.FETCH_PHRASES_SUCCESS,
      payload: data,
    });
  } catch (error) {}
}
export function* fetchOnPaginationSheets({ payload }) {
  try {
    yield put({
      type: constants.SHEETS_PAGINATION_FETCHED,
    });

    const { data } = yield call(API.fetchOnPaginationSheets, payload);
    yield put({
      type: constants.SHEETS_PAGINATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: constants.SHEETS_PAGINATION_ERR,
      payload: error.message,
    });
  }
}
export function* phraseComment({ payload }) {
  try {
    yield call(API.phraseComment, payload);
    yield put({
      type: constants.MESSAGE,
      payload: "Saved",
    });
  } catch (error) {
    console.log(error.response);
  }
}
