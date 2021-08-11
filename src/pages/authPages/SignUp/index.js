import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// TODO: make it work
// import FacebookBtn from "../../../components/UiComponents/FacebookBtn";
// import GoogleBtn from "../../../components/UiComponents/GoogleBtn";
import { signUp } from "../../../store/user/user.actions";
import {
  emailObj,
  firstNameObj,
  lastNameObj,
  passwordObj,
  passwordConfirmationObj,
} from "../../../helpers/GeneralObjects";
import Form from "../../../components/UiComponents/Form";

const fields = [
  firstNameObj,
  lastNameObj,
  emailObj,
  passwordObj,
  passwordConfirmationObj,
];

const initialValues = {
  password: "",
  password2: "",
  email: "",
  first_name: "",
  last_name: "",
};

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (user) => {
    const { password2, ...userData } = user;
    dispatch(signUp(userData, history));
  };

  return (
    <div className="auth_form">
      <h1>Sign up</h1>
      <p className="auth_form_have_ac">
        <span>Already have an account?</span>
        <Link to="/auth/signin">Sign in</Link>
      </p>
      <div className="grey_line"></div>
      <Form
        fields={fields}
        initValues={initialValues}
        submitValue="Sign Up"
        submitFunc={handleSubmit}
      />
    </div>
  );
};

export default SignUp;
