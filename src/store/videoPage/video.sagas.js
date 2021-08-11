import { call, put, select } from "redux-saga/effects";
import constants from "../constans";
import API from "../../API";

export function* videoLang({ payload }) {
  try {
    yield put({
      type: constants.VIDEO_LANG_SUCCESS,
      payload: payload.lang,
    });
    yield put({
      type: constants.SUBTITLES_REQUEST,
      payload: payload.id,
    });
  } catch (error) {
    yield put({
      type: constants.MESSAGE,
    });
  }
}
export function* saveVideoToDB({ payload }) {
  try {
    const { data } = yield call(API.saveVideoToDB, payload);
    yield put({
      type: constants.SAVE_TO_DB_SUCCESS,
      payload: data.id,
    });
  } catch (error) {
    yield put({
      type: constants.MESSAGE,
      payload: error,
    });
  }
}
export function* VideoWatch({ payload }) {
  try {
    const res = yield API.getVideoDetails(payload);
    const title = res.data.items[0].snippet.title;
    const url = res.data.items[0].snippet.thumbnails.standard.url;
    yield put({
      type: constants.SAVE_TO_DB_REQUEST,
      payload: { id: payload, title, url },
    });
  } catch (error) {
    console.log(error);
  }
}

export function* getVideoLanguage({ payload }) {
  yield put({
    type: constants.GET_VIDEO_LANGUAGE_FETCHED,
  });

  try {
    const { data } = yield call(API.getVideoLanguage, payload);

    yield put({
      type: constants.GET_VIDEO_LANGUAGE_SUCCESS,
      payload: data.items?.[0]?.snippet?.defaultLanguage,
    });
  } catch (error) {
    yield put({
      type: constants.GET_VIDEO_LANGUAGE_ERROR,
      payload: error,
    });
  }
}

export function* fetchSubtitles({ payload }) {
  try {
    const state = yield select();
    let lang = state.video.subtitles.languages.original_lang;
    lang = lang === "en-US" || lang === "en-GB" ? "en" : lang;
    console.log(lang);
    const obj = {
      id: payload.id,
      from: payload.from || lang,
      to: state.general.language,
    };
    const { data } = yield call(API.getSubtitles, obj);
    yield put({
      type: constants.SUBTITLES_SUCCESS,
      payload: {
        languages: data[0],
        subtitlesOriginal: data[1].original,
        subtitlesTranslated: data[2].translation,
        videoLanguages: data[0].all_langs_translated,
      },
    });
  } catch (error) {
    yield put({
      type: constants.MESSAGE,
    });
  }
}

export function* fetchTranslate(action) {
  try {
    const state = yield select();
    let lang = state.video.subtitles.languages.original_lang;
    lang = lang === "en-US" || lang === "en-GB" ? "en" : lang;
    const obj = {
      text: action.payload.text,
      from: lang,
      to: state.video.subtitles.languages.translated_to,
    };
    const { data } = yield call(API.textTranslate, obj);
    yield put({
      type: constants.TEXT_TRANSLATE_SUCCESS,
      payload: {
        original: action.payload.text,
        translated: data.text,
        time: action.payload.time,
        from_lang: obj.from,
        to_lang: obj.to,
        youtube_id: action.payload.id,
      },
    });
  } catch (error) {
    yield put({
      type: constants.MESSAGE,
      payload: error.message,
    });
  }
}
