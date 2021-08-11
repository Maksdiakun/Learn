import constants from "../constans";

const initState = {
  sheetsList: {
    pending: null,
    data: null,
    nextPage: null,
    currPage: null,
    err: null,
  },
  videoSheets: [],
};

const sheetsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case constants.FETCH_PHRASES_SUCCESS:
      return {
        ...state,
        sheetsList: {
          ...state.sheetsList,
          data: payload.results,
          currPage: state.sheetsList.nextPage,
          nextPage: payload.next,
        },
      };
    case constants.SAVE_PHRASE_SUCCESS:
      return {
        ...state,
        videoSheets: [...state.videoSheets, payload],
      };
    case constants.FETCH_VIDEO_PHRASES_SUCCESS:
      return {
        ...state,
        videoSheets: payload,
      };
    case constants.SHEETS_PAGINATION_FETCHED:
      return {
        ...state,
        sheetsList: {
          ...state.sheetsList,
          pending: true,
          err: null,
        },
      };
    case constants.SHEETS_PAGINATION_SUCCESS:
      return {
        ...state,
        sheetsList: {
          ...state.sheetsList,
          pending: false,
          data: [...state.sheetsList.data, ...payload.results],
          currPage: state.nextPage,
          nextPage: payload.next,
        },
      };
    case constants.SHEETS_PAGINATION_ERR:
      return {
        ...state,
        sheetsList: {
          ...state.sheetsList,
          pending: false,
          err: payload,
        },
      };
    default:
      return state;
  }
};

export default sheetsReducer;
