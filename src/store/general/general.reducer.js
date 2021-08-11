import constants from "../constans";

const lang = JSON.parse(localStorage.getItem("language"));

const initState = {
  language: lang ? lang : "en",
  load: false,
  mainRef: null,
  languages: null,
  message: false,
};

const general = (state = initState, { type, payload }) => {
  switch (type) {
    case constants.MAIN_REF:
      return {
        ...state,
        mainRef: payload,
      };
    case constants.LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: payload,
      };
    case constants.SET_LANGUAGE:
      return {
        ...state,
        language: payload,
      };
    case constants.SEARCH_REQUEST:
      return {
        ...state,
        load: true,
      };
    case constants.SEARCH_SUCCESS:
      return {
        ...state,
        load: false,
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

export default general;
