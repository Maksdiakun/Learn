import React from "react";
import "./index.scss";
import info from "../../../static/images/info.svg";

const Tooltip = ({ message }) => {
  return (
    <div className="tooltip_wrap">
      <div className="tooltip_content">{message}</div>
      <button type="button" className="tooltip_btn">
        <img src={info} alt="" />
      </button>
    </div>
  );
};

export default Tooltip;
