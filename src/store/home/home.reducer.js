import constants from "../constans";

const initState = {
  categories: null,
  suggestedVideos: {
    data: null,
    nextPage: null,
    currPage: null,
  },
};

const homeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case constants.CATEG0RIES_SUCCESS:
      return {
        ...state,
        categories: payload,
      };

    case constants.SUGGESTED_SUCCESS:
      return {
        ...state,
        suggestedVideos: {
          currPage: state.nextPage,
          nextPage: payload.nextPageToken,
          data: payload.items,
        },
      };

    case constants.SUGGESTED_PAGINATION_SUCCESS:
      return {
        ...state,
        suggestedVideos: {
          currPage: state.nextPage,
          nextPage: payload.nextPageToken,
          data: [...state.suggestedVideos.data, ...payload.items],
        },
      };
    case constants.MESSAGE:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
