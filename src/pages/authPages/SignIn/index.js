import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FacebookBtn from "../../../components/UiComponents/FacebookBtn";
import GoogleBtn from "../../../components/UiComponents/GoogleBtn";
import Form from "../../../components/UiComponents/Form";
import { emailObj, passwordObj } from "../../../helpers/GeneralObjects";
import { signIn } from "../../../store/user/user.actions";

const ForgotPass = () => <Link to="/auth/resetpass">Forgot Password?</Link>;

const fields = [emailObj, { ...passwordObj, addInfo: <ForgotPass /> }];
const initialValues = {
  password: "",
  email: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const submitFunc = (user) => {
    dispatch(signIn(user));
  };
  return (
    <div className="auth_form">
      <h1>Sign in</h1>
      <p className="auth_form_have_ac">
        <span>Don`t have an account yet?</span>
        <Link to="/auth/signup">Sign up</Link>
      </p>
      <div className="auth_form_soc">
        <GoogleBtn />
        <FacebookBtn />
      </div>
      <div className="grey_line"></div>
      <Form
        fields={fields}
        initValues={initialValues}
        submitValue="Sign In"
        submitFunc={submitFunc}
      />
    </div>
  );
};

export default SignIn;
