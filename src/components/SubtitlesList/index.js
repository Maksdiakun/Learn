import React from "react";
import { useSelector } from "react-redux";
import SubtitleItem from "../SubtitleItem";
import { fiterSubtitles } from "../../helpers/generalHelpers";
import "./index.scss";

const SubtitlesList = ({ videoTime = 0 }) => {
  const { subtitlesTranslated } = useSelector((state) => state.video.subtitles);
  return (
    <div className="subtitle_list">
      <p className="translated_lable">
        Translated
      </p>
      <ul>
        {subtitlesTranslated &&
          fiterSubtitles(subtitlesTranslated, videoTime).map((el, index) => (
            <SubtitleItem
              element={el}
              key={el.text + el.duration}
              activeClass={index === 0 ? "active_item" : ""}
            />
          ))}
      </ul>
    </div>
  );
};

export default SubtitlesList;
