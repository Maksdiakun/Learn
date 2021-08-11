import React from "react";
import "./index.scss";

const Avatar = ({ url }) => (
  <div className="avatar">
    <img src={url} alt="" />
  </div>
);
export default Avatar;
