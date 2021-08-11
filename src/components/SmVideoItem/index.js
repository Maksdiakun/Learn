import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import FilmIcon from "../icons/FilmIcon";
import { escapeHtml, cutString } from "../../helpers/generalHelpers";
import "./index.scss";

const SmVideoItem = memo(({ videoId, imgUrl, title }) => {
  const history = useHistory();
  const readbleTitle = escapeHtml(title);

  const handleClick = () => {
    history.push(`/view/${videoId}`);
  };

  return (
    <div className="sm_video_item" onClick={handleClick}>
      <div className="sm_video_item_img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="sm_video_item_title">
        <FilmIcon />
        <h2>{cutString(readbleTitle)}</h2>
      </div>
    </div>
  );
});

export default SmVideoItem;
