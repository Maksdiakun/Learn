import React, { useState } from "react";
import "./index.scss";
import commentIcon from "../../static/images/comment.svg";
import DeleteBtn from "../UiComponents/DeleteBtn";
import {
  deletePhraseRequest,
  phraseComment,
} from "../../store/study-sheets/sheets.actions";
import { useDispatch } from "react-redux";

const StudyItem = ({ original, translated, time, id, comment }) => {
  const dispatch = useDispatch();
  const [newComment, setnewComment] = useState(comment ? comment : "");
  const [height, setHeight] = useState(null);
  const handleChange = (e) => {
    setnewComment(e.target.value);
    setHeight(e.target.scrollHeight);
    if (e.which === 13 && !e.shiftKey) {
      dispatch(phraseComment({ id, comment }));
    }
  };
  const handleDelete = () => {
    dispatch(deletePhraseRequest(id));
  };
  const handleSubmit = (e) => {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault();
      dispatch(phraseComment({ id, comment: newComment }));
    }
  };
  return (
    <li className="study_item">
      <p className="study_item_time">{time}</p>
      <p className="f_bold study_item_text">{original}</p>
      <p className="study_item_translate">{translated}</p>
      <div className="study_item_comment">
        <img src={commentIcon} alt="" />
        <textarea
          name="comment"
          placeholder="Leave your coments here"
          onKeyDown={handleSubmit}
          onChange={handleChange}
          style={{ height: height }}
          value={newComment}
        ></textarea>
      </div>
      <DeleteBtn handleClick={handleDelete} />
    </li>
  );
};

export default StudyItem;
