import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthPageWrapper from "../components/AuthPageWrapper";
import SignIn from "../pages/authPages/SignIn";
import SignUp from "../pages/authPages/SignUp";
import ResetPass from "../pages/authPages/ResetPass";
import MessageModal from "../pages/authPages/MessageModal";
import SetPassword from "../pages/authPages/SetPassword";

const AuthRoutes = () => {
  return (
    <AuthPageWrapper>
      <Switch>
        <Route exact path="/auth/signup" component={SignUp} />
        <Route exact path="/auth/resetpass" component={ResetPass} />
        <Route exact path="/auth/resetpass/message" component={MessageModal} />
        <Route
          exact
          path="/auth/resetpass/setpassword"
          component={SetPassword}
        />
        <Route path="/" component={SignIn} />
      </Switch>
    </AuthPageWrapper>
  );
};
export default AuthRoutes;
