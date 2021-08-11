import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uid } from "uuid";
import {
  getSubtitles,
  getVideoLang,
} from "../../store/videoPage/video.actions";
import "./index.scss";

const VideoLanguageSelect = ({ id, langModalShow }) => {
  const dispatch = useDispatch();
  const { available_languages } = useSelector(
    (state) => state.video.subtitles.languages
  );

  const handleClick = ({ target }) => {
    dispatch(getSubtitles(id, target.value));
    langModalShow(false);
  };

  return (
    <div className="video_lang_select_wrap">
      <div className="video_lang_select">
        <h3>Choose native language of the video </h3>
        <ul>
          {available_languages &&
            available_languages.map((e) => (
              <li key={uid()}>
                <button type="button" value={e[0]} onClick={handleClick}>
                  {e[1]}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoLanguageSelect;
