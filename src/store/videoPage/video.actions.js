import constants from "../constans";

export const getVideoLang = (id, lang) => ({
  type: constants.VIDEO_LANG_REQUEST,
  payload: {
    id,
    lang,
  },
});

export const watch_video = (id) => ({
  type: constants.WATCH_VIDEO,
  payload: id,
});

export const getSubtitles = (id, from, to) => {
  return {
    type: constants.SUBTITLES_REQUEST,
    payload: {
      id,
      from,
      to,
    },
  };
};

export const fetchTextTranslate = (text, time, id) => ({
  type: constants.TEXT_TRANSLATE_REQUEST,
  payload: {
    text,
    time,
    id,
  },
});

export const TextTranslateSucces = (text, translated) => ({
  type: constants.TEXT_TRANSLATE_SUCCESS,
  payload: {
    focusCaptions: text,
    translatedCaptions: translated,
  },
});

export const setVideoLang = (lang) => ({
  type: constants.SET_VIDEO_LANGUAGE,
  payload: lang,
});

export const saveVideoToDB = (id, title, url) => ({
  type: constants.SAVE_TO_DB_REQUEST,
  payload: {
    id,
    title,
    url,
  },
});

export const getVideoLanguage = (id) => ({
  type: constants.GET_VIDEO_LANGUAGE_REQUEST,
  payload: id,
});
