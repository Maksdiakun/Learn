import React from "react";
import "./index.scss";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import facebook from "../../../static/images/facebook.svg";
import { signInSoc } from "../../../store/user/user.actions";
import { useDispatch } from "react-redux";

const FacebookBtn = ({ callBack }) => {
  const dispatch = useDispatch();
  const responseFacebook = (args) => {
    dispatch(signInSoc("facebook", args.accessToken));
  };
  return (
    <FacebookLogin
      appId="4432602196792173"
      callback={responseFacebook}
      render={(renderProps) => (
        <button onClick={renderProps.onClick} className="facebook_btn">
          <img src={facebook} alt="" />
        </button>
      )}
    />
  );
};
export default FacebookBtn;
