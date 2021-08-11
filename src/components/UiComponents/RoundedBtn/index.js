import React from "react";
import "./index.scss";

const RoundedBtn = ({ value, type }) => (
  <button type={type} className="rounded_btn">
    <span>{value}</span>
  </button>
);
export default RoundedBtn;
