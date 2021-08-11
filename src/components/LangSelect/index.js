import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLanguages,
  setLanguage,
} from "../../store/general/general.actions";
import arrow from "../../static/images/arrowDown.svg";

const LangSelect = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    labelText: "",
    showOptionList: false,
    optionsList: [],
  });
  const { languages, language } = useSelector((state) => state.general);

  useEffect(() => {
    dispatch(fetchLanguages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const blockRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    setState({
      labelText: language,
    });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // This method handles the click that happens outside the
  // select text and list area
  const handleClickOutside = (event) => {
    if (blockRef.current && !blockRef.current.contains(event.target)) {
      setState((prevState) => {
        return {
          ...prevState,
          showOptionList: false,
        };
      });
    }
  };

  // This method handles the display of option list
  const handleListDisplay = () => {
    setState((prevState) => {
      return {
        ...prevState,
        showOptionList: !prevState.showOptionList,
      };
    });
  };

  // This method handles the setting of name in select text area
  // and list display on selection
  const handleOptionClick = (el) => () => {
    setState({
      labelText: el,
      showOptionList: false,
    });
    dispatch(setLanguage(el));
  };

  const { showOptionList, labelText } = state;

  return (
    <>
      {languages && (
        <div className="select_container" ref={blockRef}>
          <div
            className={`select_label${
              showOptionList ? " select_label_active" : ""
            }
          `}
            onClick={handleListDisplay}
          >
            <div>
              <p>{labelText}</p>
              <img src={arrow} alt="" className="arrow_img" />
            </div>
          </div>
          {showOptionList && (
            <ul className="select_options">
              {languages &&
                languages.map((el) => {
                  return (
                    <li
                      key={`language${el.id}`}
                      onClick={handleOptionClick(el.code)}
                      className={labelText === el.title ? "active_option" : ""}
                    >
                      {el.title}
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default LangSelect;
