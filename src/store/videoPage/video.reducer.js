import constants from "../constans";

const initState = {
  subtitles: {
    subtitlesTranslated: null,
    subtitlesOriginal: null,
    languages: {
      pending: false,
      original_lang: null,
      translated_to: null,
      err: null,
      available_languages: null,
    },
    videoLanguages: [],
  },
  focusCaptions: {
    original: null,
    translated: null,
    time: null,
    from_lang: null,
    to_lang: null,
    youtube_id: null,
  },
  video_id: null,
};

const videoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case constants.SUBTITLES_SUCCESS:
      return {
        ...state,
        subtitles: payload,
      };
    case constants.FOCUS_CAPTIONS:
      return {
        ...state,
        focusCaptions: payload,
      };
    case constants.VIDEO_LANG_SUCCESS:
      return {
        ...state,
        subtitles: {
          ...state.subtitles,
          languages: {
            ...state.subtitles.languages,
            original_lang: payload,
          },
        },
      };
    case constants.TEXT_TRANSLATE_SUCCESS:
      return {
        ...state,
        focusCaptions: payload,
      };
    case constants.SAVE_TO_DB_SUCCESS:
      return {
        ...state,
        video_id: payload,
      };
    case constants.GET_VIDEO_LANGUAGE_FETCHED:
      return {
        ...state,
        subtitles: {
          ...state.subtitles,
          languages: {
            ...state.subtitles.languages,
            pending: true,
          },
        },
      };
    case constants.GET_VIDEO_LANGUAGE_SUCCESS:
      return {
        ...state,
        subtitles: {
          ...state.subtitles,
          languages: {
            ...state.subtitles.languages,
            original_lang: payload,
            pending: false,
          },
        },
      };
    case constants.GET_VIDEO_LANGUAGE_ERROR:
      return {
        ...state,
        subtitles: {
          ...state.subtitles,
          languages: {
            ...state.subtitles.languages,
            err: payload,
            pending: false,
          },
        },
      };
    default:
      return state;
  }
};

export default videoReducer;
