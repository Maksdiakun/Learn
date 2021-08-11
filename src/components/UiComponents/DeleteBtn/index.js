import React from "react";
import "./index.scss";
import DeleteIcon from "../../icons/DeleteIcon";

const DeleteBtn = ({ handleClick }) => {
  return (
    <button type="button" className="delete_btn" onClick={handleClick}>
      <DeleteIcon />
    </button>
  );
};

export default DeleteBtn;
