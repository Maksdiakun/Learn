import React from "react";
import "./index.scss";
import google from "../../../static/images/google.svg";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { signInSoc } from "../../../store/user/user.actions";

const GoogleBtn = ({ handleClick, successFun, errFun }) => {
  const dispatch = useDispatch();
  const responseGoogle = (args) => {
    dispatch(signInSoc("google-oauth2", args.accessToken));
  };
  return (
    <GoogleLogin
      clientId="26263069351-94hvdle006rvmv4m348bt6km0h7mm7it.apps.googleusercontent.com"
      render={(renderProps) => (
        <button
          type="button"
          onClick={renderProps.onClick}
          className="google_btn"
        >
          <img src={google} alt="" />
          <span>Sign in with Google</span>
        </button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};
export default GoogleBtn;
