import { takeLatest } from "redux-saga/effects";
import constants from "./constans";
import {
  signUp,
  signIn,
  signOut,
  userCheck,
  getUserId,
  refreshToken,
  resetPass,
  signInSoc,
} from "./user/user.sagas";
import { fetchSearch, scrollSearch } from "./search/search.sagas";
import { fetchLanguages } from "./general/general.sagas";
import {
  fetchPhrases,
  savePhrase,
  fetchVideoPhrases,
  fetchOnPaginationSheets,
  deleteStudySheet,
  searchPhrases,
  sortBy,
  phraseComment,
} from "./study-sheets/sheets.sagas";
import {
  getCategories,
  getSuggestedVideos,
  suggestedOnPagination,
} from "./home/home.sagas";
import {
  saveVideoToDB,
  getVideoLanguage,
  videoLang,
  fetchTranslate,
  fetchSubtitles,
  VideoWatch,
} from "./videoPage/video.sagas";
import { getViewedVideo, getViewedOnPagination } from "./library/library.sagas";

export default function* watchAll() {
  yield takeLatest(constants.SEARCH_REQUEST, fetchSearch);
  yield takeLatest(constants.SEARCH_SCROLL_REQUEST, scrollSearch);
  yield takeLatest(constants.SUBTITLES_REQUEST, fetchSubtitles);
  yield takeLatest(constants.PHRASE_COMMENT, phraseComment);
  yield takeLatest(constants.LANGUAGES_REQUEST, fetchLanguages);
  yield takeLatest(constants.TEXT_TRANSLATE_REQUEST, fetchTranslate);
  yield takeLatest(constants.VIDEO_LANG_REQUEST, videoLang);
  //
  yield takeLatest(constants.SIGN_UP, signUp);
  yield takeLatest(constants.SIGN_IN, signIn);
  yield takeLatest(constants.SIGN_IN_SOC, signInSoc);
  yield takeLatest(constants.SIGN_OUT, signOut);
  yield takeLatest(constants.RESET_PASS, resetPass);
  yield takeLatest(constants.USER_CHECK, userCheck);
  yield takeLatest(constants.REFRESH_TOKEN, refreshToken);
  //
  yield takeLatest(constants.SAVE_PHRASE_REQUEST, savePhrase);
  yield takeLatest(constants.FETCH_PHRASES_REQUEST, fetchPhrases);
  yield takeLatest(constants.FETCH_VIDEO_PHRASES_REQUEST, fetchVideoPhrases);
  yield takeLatest(constants.DELETE_PHRASE_REQUEST, deleteStudySheet);
  yield takeLatest(constants.SEARCH_PHRASES_REQUEST, searchPhrases);
  yield takeLatest(constants.SORT_PHRASES_REQUEST, sortBy);
  //
  yield takeLatest(constants.WATCH_VIDEO, VideoWatch);
  yield takeLatest(constants.SAVE_TO_DB_REQUEST, saveVideoToDB);
  yield takeLatest(constants.USER_ID_REQUEST, getUserId);
  yield takeLatest(constants.GET_VIDEO_LANGUAGE_REQUEST, getVideoLanguage);
  yield takeLatest(constants.CATEG0RIES_FETCHED, getCategories);
  yield takeLatest(constants.SUGGESTED_FETCHED, getSuggestedVideos);
  yield takeLatest(
    constants.SUGGESTED_PAGINATION_FETCHED,
    suggestedOnPagination
  );
  yield takeLatest(constants.GET_VIEWED_REQUEST, getViewedVideo);

  yield takeLatest(
    constants.GET_VIEWED_PAGINATION_REQUEST,
    getViewedOnPagination
  );
  yield takeLatest(
    constants.SHEETS_PAGINATION_REQUEST,
    fetchOnPaginationSheets
  );
}
