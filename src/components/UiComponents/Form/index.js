import React from "react";
import "./index.scss";
import { useFormik } from "formik";
import InputField from "../InputField";
import RoundedBtn from "../RoundedBtn";
import ValidationRules from "../../../helpers/ValidationRules";

const Form = ({ fields, initValues, submitValue, submitFunc }) => {
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: ValidationRules(initValues),
    onSubmit: (values) => {
      submitFunc(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {fields.map((el) => (
        <InputField
          key={el.name}
          type={el.type}
          name={el.name}
          label={el.label}
          placeholder={el.placeholder}
          icon={el.icon}
          onChange={formik.handleChange}
          value={formik.values[el.name]}
          erorr={formik.errors[el.name]}
          touched={formik.touched[el.name]}
          addInfo={el.addInfo}
        />
      ))}
      <RoundedBtn type="submit" value={submitValue} />
    </form>
  );
};
export default Form;
