import React, { memo } from "react";
import "./index.scss";
const LangBtn = memo(({ val, langModalShow }) => {
  const handleClick = () => {
    langModalShow(true);
  };
  return (
    <button onClick={handleClick} className="lang_btn">
      {val}
    </button>
  );
});

export default LangBtn;
