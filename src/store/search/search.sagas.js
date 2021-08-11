import { call, put, select } from "redux-saga/effects";
import constants from "../constans";
import API from "../../API";

export function* fetchSearch(action) {
  try {
    const response = yield call(API.search, action.payload);
    yield put({
      type: constants.SEARCH_SUCCESS,
      payload: {
        data: response.data,
        query: action.payload,
      },
    });
  } catch (error) {
    yield put({
      type: constants.MESSAGE,
      payload: error,
    });
  }
}

export function* scrollSearch() {
  try {
    const {
      searchReducer: { nextPage, searchResults, query },
    } = yield select();
    const newarr = [...searchResults];
    const { data } = yield call(API.searchPagination, query, nextPage);

    yield put({
      type: constants.SCROLL_SUCCESS,
      payload: {
        items: [...newarr, ...data.items],
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    yield put({
      type: constants.MESSAGE,
      payload: error,
    });
  }
}
