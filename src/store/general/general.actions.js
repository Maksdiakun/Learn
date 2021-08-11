import constants from "../constans";

export const fetchLanguages = () => ({
  type: constants.LANGUAGES_REQUEST,
});

export const setLanguage = (lang) => {
  localStorage.setItem("language", JSON.stringify(lang));
  return {
    type: constants.SET_LANGUAGE,
    payload: lang,
  };
};

export const mainRefAction = (ref) => ({
  type: constants.MAIN_REF,
  payload: ref,
});

export const messageAction = (message) => ({
  type: constants.MESSAGE,
  payload: message,
});
