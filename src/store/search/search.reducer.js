import constants from "../constans";

const initState = {
  searchResults: null,
  nextPage: null,
  currPage: null,
};

const searchReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case constants.SEARCH_SUCCESS:
      return {
        ...state,
        currPage: state.nextPage,
        nextPage: payload.data.nextPageToken,
        searchResults: payload.data.items,
        query: payload.query,
      };
    case constants.SCROLL_SUCCESS:
      return {
        ...state,
        currPage: state.nextPage,
        nextPage: payload.nextPageToken,
        searchResults: payload.items,
      };
    default:
      return state;
  }
};

export default searchReducer;
