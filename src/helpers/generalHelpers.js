import axios from "axios";

export const seconds = (sec) => {
  const minutes = Math.floor(sec / 60);
  const seconds = (sec % 60).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export const fiterSubtitles = (arr, videoTime) => {
  const filteredArr = arr.filter((el) => videoTime >= +el.start);
  const subtitles = filteredArr.map((el) => ({
    ...el,
    start: seconds(el.start),
  }));
  return [...subtitles].reverse();
};

export const captionText = (arr, videoTime) => {
  const a = arr.filter((el) => videoTime >= +el.start);
  if (a.length > 0) {
    return a[a.length - 1];
  }
};

export const escapeHtml = (text) => {
  if (!text) return;

  var map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  for (let key in map) {
    const reg = new RegExp(map[key], "g");
    text = text.replace(reg, key);
  }
  return text;
};

export const cutString = (str) => {
  if (!str) return;
  let res;
  if (str.length > 47) {
    let cutted = str.slice(0, 47);
    let last = cutted.lastIndexOf(" ");

    res = cutted.slice(0, last);

    return res + "...";
  }

  return str;
};
