import React from "react";
import { useDispatch } from "react-redux";
import deleteIcon from "../../static/images/deleteIcon.svg";
import { deletePhraseRequest } from "../../store/study-sheets/sheets.actions";

const StudySheetsList = ({ list, video_id }) => {
  const dispatch = useDispatch();
  const handleClick = (id) => () => {
    dispatch(deletePhraseRequest(id, video_id));
  };
  return (
    <ul className="notes_list">
      {list &&
        list.map((el) => (
          <li key={el.time}>
            <p>
              <span className="notes_time">{el.time}</span>
              <span className="notes_word">{el.original}</span>
              <span className="margin_5">-</span>
              <span className="notes_trns">{el.translated}</span>
            </p>
            <button type="button" onClick={handleClick(el.id)}>
              <img src={deleteIcon} alt="" />
            </button>
          </li>
        ))}
    </ul>
  );
};

export default StudySheetsList;
