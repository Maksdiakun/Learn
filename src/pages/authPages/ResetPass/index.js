import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Form from "../../../components/UiComponents/Form";
import { emailObj } from "../../../helpers/GeneralObjects";
import { resetPassword } from "../../../store/user/user.actions";
const fields = [emailObj];
const initialValues = {
  email: "",
};
const ResetPass = () => {
  const dispatch = useDispatch();
  const submitFunc = (values) => {
    console.log("submitFunc", values);
    dispatch(resetPassword(values.email));
  };
  return (
    <div className="auth_form">
      <h1>Reset password</h1>
      <Form
        fields={fields}
        initValues={initialValues}
        submitValue="Send me the link"
        submitFunc={submitFunc}
      />
      <Link to="/auth/signin" className="auth_link">
        or Sign in
      </Link>
    </div>
  );
};

export default ResetPass;
