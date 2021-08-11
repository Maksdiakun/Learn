import constants from "../constans";

const initState = {
  history_video: {
    pending: false,
    data: null,
    currPage: null,
    nextPage: null,
    err: null,
  },
};

const libraryReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case constants.GET_VIEWED_FETCHED:
      return {
        ...state,
        history_video: {
          ...initState.history_video,
          pending: true,
        },
      };
    case constants.GET_VIEWED_SUCCESS:
      return {
        ...state,
        history_video: {
          ...state.history_video,
          pending: false,
          data: payload.results,
        },
      };
    case constants.GET_VIEWED_ERROR:
      return {
        ...state,
        history_video: {
          ...state.history_video,
          pending: false,
          err: payload,
        },
      };
    case constants.GET_VIEWED_PAGINATION_FETCHED:
      return {
        ...state,
        history_video: {
          ...state.history_video,
          pending: true,
        },
      };
    case constants.GET_VIEWED_PAGINATION_SUCCESS:
      return {
        ...state,
        history_video: {
          ...state.history_video,
          pending: false,
          data: [...state.history_video.data, ...payload.results],
          currPage: state.nextPage,
          nextPage: payload.next,
        },
      };
    case constants.GET_VIEWED_PAGINATION_ERROR:
      return {
        ...state,
        history_video: {
          ...state.history_video,
          pending: false,
          err: payload,
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

export default libraryReducer;
