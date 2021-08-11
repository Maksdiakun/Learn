import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import API from "../API";
import AuthRoutes from "../AuthRoutes";
import Message from "../components/UiComponents/Message";
import PrivateRoutes from "../PrivateRoutes";
import { getUserId } from "../store/user/user.actions";
import "../styles/general.scss";

const App = () => {
  const dispatch = useDispatch();
  const {
    user: { authorized },
    general: { message },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUserId());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <CSSTransition
        in={!!message}
        timeout={400}
        unmountOnExit={true}
        classNames="mess"
      >
        <Message message={message} />
      </CSSTransition>
      <div>
        {authorized ? (
          <PrivateRoutes authorized={authorized} />
        ) : (
          <AuthRoutes authorized={authorized} />
        )}
      </div>
    </div>
  );
};

export default App;
