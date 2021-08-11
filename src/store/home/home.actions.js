import constants from "../constans";

export const getCategories = () => ({
  type: constants.CATEG0RIES_FETCHED,
});

export const getSuggestedVideos = () => ({
  type: constants.SUGGESTED_FETCHED,
});

export const suggestedOnPagination = (nextPage) => ({
  type: constants.SUGGESTED_PAGINATION_FETCHED,
  payload: nextPage,
});
