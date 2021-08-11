import React, { memo } from "react";
import "./index.scss";
import camera from "../../static/images/camera.svg";

const SubtitleItem = memo(({ element, activeClass }) => {
  return (
    <li className={`subtitle_item ${activeClass}`}>
      <div className="align_center">
        <img src={camera} alt="" />
        <span>{element.start}</span>
      </div>
      <p>{element.text}</p>
    </li>
  );
});

export default SubtitleItem;
