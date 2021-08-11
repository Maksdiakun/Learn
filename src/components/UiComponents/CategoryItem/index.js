import React from "react";
import "./index.scss";
const CategoryItem = ({ label, value, onClick }) => {
  return (
    <button
      type="button"
      value={value}
      className="category_item"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CategoryItem;
