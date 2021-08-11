import React from "react";
import "./index.scss";
import Avatar from "../../UiComponents/Avatar";
import Select from "../../UiComponents/Select";
import MenuList from "../MenuList";
import { selectLanguage } from "../../../helpers/GeneralObjects";
import LogOutIcon from "../../icons/LogOutIcon";

const MobileMenu = ({ setState }) => {
  const handleClose = () => {
    setState((prevState) => ({
      ...prevState,
      menu: false,
    }));
  };
  return (
    <div className="mob_menu_wrap">
      <div className="mob_menu">
        <div>
          <div className="mob_menu_header just_center">
            <Avatar url="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" />
            <h3>Mark Nomi</h3>
          </div>
          <div className="mob_menu_language ">
            <span>Language</span>
            <Select
              optionsList={selectLanguage.countryList}
              defaultText={selectLanguage.defaultSelectText}
            />
          </div>
          <div className="mob_menu_list">
            <MenuList />
          </div>
        </div>
        <button className="log_out_btn">
          <LogOutIcon />
          <span>Log Out</span>
        </button>
      </div>
      <button className="close_menu_btn" onClick={handleClose}>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default MobileMenu;
