import constants from "../constans";

export const fetchSearch = (payload, history) => {
  history.push("/search");
  return {
    type: constants.SEARCH_REQUEST,
    payload: payload,
  };
};

export const scrollSearch = () => ({
  type: constants.SEARCH_SCROLL_REQUEST,
});
