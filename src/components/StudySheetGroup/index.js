import React, { useEffect, useState, memo } from "react";
import { CSSTransition } from "react-transition-group";
import StudyItem from "../StudyItem";
import "./index.scss";

const StudySheetGroup = memo(({ sheets, id, title, date, study_id }) => {
  const [state, setState] = useState({
    show: false,
  });
  const [time, setTime] = useState("");
  const handleToggle = () => {
    setState((prevState) => ({
      ...prevState,
      show: !prevState.show,
    }));
  };

  useEffect(() => {
    const newDate = new Date(date);
    setTime(newDate.toLocaleString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <li className="study_sheet_group">
      <div className="study_sheet_group_title">
        <div onClick={handleToggle}>
          <h2>{title}</h2>
          <div className="study_sheet_group_title_time">
            <h3>
              <span>Date:</span>
              <span>{time}</span>
            </h3>
          </div>
          <div className={`triangle ${state.show ? "triangle_up" : ""}`}></div>
        </div>
      </div>
      <CSSTransition
        in={state.show}
        timeout={10}
        unmountOnExit={true}
        mountOnEnter={true}
        classNames="list"
      >
        <ul>
          {Object.values(sheets).map((el) => (
            <StudyItem
              time={el.time}
              translated={el.translated}
              original={el.original}
              key={el.time + id + el.translated}
              id={el.id}
              comment={el.comment}
              item={el}
            />
          ))}
        </ul>
      </CSSTransition>
    </li>
  );
});

export default StudySheetGroup;
