import constants from "../constans";

export const savePhraseRequest = (payload) => {
  return {
    type: constants.SAVE_PHRASE_REQUEST,
    payload,
  };
};

export const fetchVideoPhrasesRequest = (id) => {
  return {
    type: constants.FETCH_VIDEO_PHRASES_REQUEST,
    payload: id,
  };
};

export const fetchPhrasesRequest = () => {
  return {
    type: constants.FETCH_PHRASES_REQUEST,
  };
};

export const deletePhraseRequest = (id, video_id) => {
  return {
    type: constants.DELETE_PHRASE_REQUEST,
    payload: {
      id,
      video_id,
    },
  };
};
export const searchPhrasesRequest = (searchString) => ({
  type: constants.SEARCH_PHRASES_REQUEST,
  payload: searchString,
});
export const sortByRequest = (value) => ({
  type: constants.SORT_PHRASES_REQUEST,
  payload: value,
});

export const fetchOnPaginationSheets = (url) => ({
  type: constants.SHEETS_PAGINATION_REQUEST,
  payload: url,
});
export const phraseComment = (comment) => ({
  type: constants.PHRASE_COMMENT,
  payload: comment,
});
