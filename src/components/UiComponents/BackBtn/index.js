import React from "react";
import { useHistory } from "react-router";
import ArrowBack from "../../icons/ArrowBack";

const BackBtn = () => {
  const history = useHistory();
  const handleClick = () => {
    return history.goBack();
  };
  return (
    <button onClick={handleClick} className="back_btn">
      <ArrowBack />
    </button>
  );
};

export default BackBtn;
