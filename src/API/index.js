import axios from "axios";

class API {
  static prefix = `/api/v1`;
  static client_id = "CPi56cOkPxkteCpKaN0DxieloBSfGS9sWh6d6MtK";
  static client_secret =
    "QdXmWKzvvl5HqWvd6EcMjvd0rHyHBNyZLaHXOfswUm0YxcB3kkNzmER4U8cONmRSyTSSD1nSgiW0UIKZaoGqF5mp06DH0J4ao3xnvIkTe5nsWScbKuAgeMYdtwiCs9gz";
  static url =
    window.location.hostname === "localhost" ? "http://localhost:8000" : "";

  static get config() {
    return { headers: { "Content-Type": "application/json" } };
  }

  static get privateConfig() {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
  }

  static suggestedVideo(nextPage) {
    const page = nextPage ? `?page=${nextPage}` : "";
    return axios.get(
      `${API.url}${API.prefix}/videos/search_video/${page}`,
      API.privateConfig
    );
  }

  static search(query) {
    return axios.get(
      `${API.url}${API.prefix}/videos/search_video/?title=${query}`,
      API.privateConfig
    );
  }

  static searchPagination(query, page) {
    return axios.get(
      `${API.url}${API.prefix}/videos/search_video/?title=${query}&page=${page}`,
      API.privateConfig
    );
  }

  static getSubtitles({ id, from, to }) {
    const from_lang = from ? `&original=${from}` : "";
    const to_lang = to ? `lang=${to}&` : "";
    const path = `${API.url}${API.prefix}/subtitles/subtitles/?${to_lang}video_id=${id}${from_lang}`;
    return axios.get(path, API.privateConfig);
  }

  static textTranslate({ text, from, to }) {
    return axios.get(
      `${API.url}${API.prefix}/translates/get_translate/?string=${text}&from_lang=${from}&to_lang=${to}`,
      API.privateConfig
    );
  }

  static getLanguages(currPage) {
    return axios.get(
      `${API.url}${API.prefix}/videos/get_languages/${
        currPage ? `?page=${currPage}` : ""
      }`,
      API.privateConfig
    );
  }

  static getAllLanguages() {
    return axios.get(`${API.url}${API.prefix}/languages/`, API.privateConfig);
  }

  static getCategories() {
    return axios.get(
      `${API.url}${API.prefix}/categories/list_of_categories/`,
      API.privateConfig
    );
  }

  static getVideoLanguage(id) {
    return axios.get(
      `${API.url}${API.prefix}/videos/get_video/?video_id=${id}`,
      API.privateConfig
    );
  }

  static signUp(user) {
    return axios.post(`${API.url}${API.prefix}/users/`, user, API.config);
  }

  static signIn(user) {
    const obj = {
      grant_type: "password",
      client_id: API.client_id,
      client_secret: API.client_secret,
      username: user.email,
      password: user.password,
    };
    return axios.post(`${API.url}${API.prefix}/auth/token/`, obj, API.config);
  }
  static signInSoc({ type, token }) {
    const obj = {
      grant_type: "convert_token",
      client_id: API.client_id,
      client_secret: API.client_secret,
      backend: type,
      token: token,
    };
    return axios.post(
      `${API.url}${API.prefix}/auth/convert-token/`,
      obj,
      API.config
    );
  }

  static signOut() {
    const user = JSON.parse(localStorage.getItem("user"));
    const obj = {
      client_id: API.client_id,
      client_secret: API.client_secret,
      token: user.access_token,
    };
    return axios.post(
      `${API.url}${API.prefix}/auth/revoke-token`,
      obj,
      API.config
    );
  }
  static userCheck() {
    const user = JSON.parse(localStorage.getItem("user"));
    return axios.post(
      `${API.url}${API.prefix}/auth/token/verify/`,
      {
        token: user.access_token,
      },
      API.privateConfig
    );
  }
  static refreshToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    const body = {
      grant_type: "refresh_token",
      client_id: API.client_id,
      client_secret: API.client_secret,
      refresh_token: user.refresh_token,
    };
    const headers = {
      Authorization: `Bearer ${user.access_token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    return fetch(`${API.url}${API.prefix}/auth/token`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
  }
  static resetPass(email) {
    return axios.post(
      `${API.url}${API.prefix}/users/reset-password/`,
      { email: email },
      API.config
    );
  }
  static saveVideoToDB({ id, title, url }) {
    return axios.post(
      `${API.url}${API.prefix}/videos/`,
      { video_id: id, title, youtube_data: { img: url } },
      API.privateConfig
    );
  }

  static savePhrase({
    from_lang,
    to_lang,
    time,
    original,
    translated,
    youtube_id,
    video_id,
    user,
  }) {
    let body = {
      youtube_id,
      original,
      from_lang,
      to_lang,
      translated,
      time,
      video: video_id,
      user,
    };
    return axios.post(
      `${API.url}${API.prefix}/study-sheets/`,
      body,
      API.privateConfig
    );
  }

  static fetchStudySheets() {
    return axios.get(
      `${API.url}${API.prefix}/study-sheets/`,
      API.privateConfig
    );
  }
  static phraseComment({ id, comment }) {
    return axios.patch(
      `${API.url}${API.prefix}/study-sheets/${id}/`,
      { comment },
      API.privateConfig
    );
  }

  static fetchOnPaginationSheets(url) {
    return axios.get(url, API.privateConfig);
  }

  static fetchVideoPhrasesRequest(id) {
    return axios.get(
      `${API.url}${API.prefix}/study-sheets/?video_id=${id}`,
      API.privateConfig
    );
  }
  static searchPhrases(searchString) {
    return axios.get(
      `${API.url}${API.prefix}/study-sheets/?search=${searchString}`,
      API.privateConfig
    );
  }
  static sortBy(value) {
    return axios.get(
      `${API.url}${API.prefix}/study-sheets/?ordering=${value}`,
      API.privateConfig
    );
  }

  static getViewedVideo(page) {
    return axios.get(
      `${API.url}${API.prefix}/videos/${page ? `?page=${page}` : ""}`,
      API.privateConfig
    );
  }

  static deleteSheets(id) {
    return axios.delete(
      `${API.url}${API.prefix}/study-sheets/${id}/`,
      API.privateConfig
    );
  }

  // TODO: remake it
  static getVideoName(id) {
    return axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyAptzhSmSByELYoEM5zgVe1pps3qz-Z-Xo`,
      API.config
    );
  }

  static getUserId() {
    return axios.get(`${API.url}${API.prefix}/users/me/`, API.privateConfig);
  }

  static getVideoDetails(id) {
    return axios.get(
      `${API.url}${API.prefix}/videos/get_video/?video_id=${id}`,
      API.privateConfig
    );
  }
}
export default API;
