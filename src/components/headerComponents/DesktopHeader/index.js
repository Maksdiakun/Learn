import React, { useEffect, useState } from "react";
import SerchField from "../../UiComponents/SearchField";
import Select from "../../UiComponents/Select";
import Avatar from "../../UiComponents/Avatar";
import LogOutIcon from "../../icons/LogOutIcon";
import LangSelect from "../../LangSelect";
import { useDispatch, useSelector } from "react-redux";
import { signOut as signOutAction } from "../../../store/user/user.actions";

const DesktopHeader = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(signOutAction());
  };
  const { email, first_name, last_name } = useSelector(
    (state) => state.user.info
  );
  const [state, setState] = useState({
    defaultSelectText: "",
    arr: [{ value: "LogOut", name: "Log Out", icon: <LogOutIcon /> }],
  });

  useEffect(() => {
    setState({
      ...state,
      defaultSelectText: email,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  return (
    <div className="header_main">
      <SerchField />
      <div className="align_center">
        <LangSelect />
        <Select
          optionsList={state.arr}
          defaultText={state.defaultSelectText}
          selectAction={signOut}
        >
          <Avatar url="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" />
          <p className="header_name">
            <span>{first_name}</span>
            <span>{last_name}</span>
          </p>
        </Select>
      </div>
    </div>
  );
};

export default DesktopHeader;
