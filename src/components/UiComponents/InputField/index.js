import React from "react";
import "./index.scss";
import attention from "../../../static/images/attention.svg";
const InputField = ({
  type,
  name,
  label,
  placeholder,
  icon,
  onChange,
  value,
  erorr,
  touched,
  addInfo,
}) => {
  return (
    <div
      className={`input_field_wrap ${
        touched && erorr ? "input_field_wrap_error" : ""
      }`}
    >
      <label htmlFor={name}>{label}</label>
      <div className="input_field">
        {icon && icon}
        <input
          id={name}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
        <div className="input_field_add_info">{addInfo}</div>
      </div>
      {touched && erorr ? (
        <div className="input_field_error">
          <img src={attention} alt="" />
          <span>{erorr}</span>
        </div>
      ) : null}
    </div>
  );
};
export default InputField;
