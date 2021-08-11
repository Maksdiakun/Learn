import React from "react";
import Form from "../../../components/UiComponents/Form";
import {
  passwordObj,
  passwordConfirmationObj,
} from "../../../helpers/GeneralObjects";

const fields = [passwordObj, passwordConfirmationObj];
const initialValues = {
  password: "",
  passwordConfirmation: "",
};
const SetPassword = () => {
  return (
    <div className="auth_form">
      <h1>Set password</h1>
      <Form
        fields={fields}
        initValues={initialValues}
        submitValue="Reset Password"
      />
    </div>
  );
};

export default SetPassword;
