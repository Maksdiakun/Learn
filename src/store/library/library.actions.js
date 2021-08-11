import constants from "../constans";

export const getViewedVideo = () => ({
  type: constants.GET_VIEWED_REQUEST,
});

export const getViewedOnPagination = (page) => ({
  type: constants.GET_VIEWED_PAGINATION_REQUEST,
  payload: page,
});
