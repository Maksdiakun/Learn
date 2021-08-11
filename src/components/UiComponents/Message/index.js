import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { messageAction } from "../../../store/general/general.actions";
import "./index.scss";
const Message = ({ message }) => {
  console.log(message);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(messageAction(false));
    }, 3000);
  }, [dispatch]);
  if (typeof message !== "string") {
    return null;
  }
  return <div className="message_res">{message}</div>;
};

export default Message;
