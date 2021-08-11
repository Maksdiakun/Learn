import React, { useState, useRef } from "react";
import "./index.scss";
import { CSSTransition } from "react-transition-group";
import SearchIcon from "../../icons/SearchIcon";
import MobileSearch from "../../UiComponents/MobileSearch";
import MobileMenu from "../../menuComponents/MobileMenu";

const MobileHeader = () => {
  const btnRef = useRef(null);
  const [state, setState] = useState({
    search: false,
    menu: false,
  });
  const handleOpen = (value) => () => {
    setState((prevState) => ({
      ...state,
      [value]: !prevState[value],
    }));
  };
  return (
    <div className={`header_mobile_wrap ${state.menu ? "header_fixed" : ""}`}>
      <div className="header_mobile">
        <button
          className="menu_mob_btn"
          onClick={handleOpen("menu")}
          value="menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h3>Logo</h3>
        <button onClick={handleOpen("search")} ref={btnRef}>
          <SearchIcon />
        </button>
      </div>
      <CSSTransition
        in={state.search}
        timeout={700}
        unmountOnExit={true}
        classNames="alert"
      >
        <MobileSearch setState={setState} btnRef={btnRef} />
      </CSSTransition>
      <CSSTransition
        in={state.menu}
        timeout={300}
        unmountOnExit={true}
        classNames="menu"
      >
        <MobileMenu setState={setState} />
      </CSSTransition>
    </div>
  );
};

export default MobileHeader;
