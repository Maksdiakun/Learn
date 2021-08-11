import React from "react";

import "./index.scss";

const AuthPageWrapper = ({ children }) => (
  <div className="auth_wrap">
    <div className="auth_content">{children}</div>
  </div>
);
export default AuthPageWrapper;
