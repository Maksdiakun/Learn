import React from "react";
import { useDispatch } from "react-redux";
import { TextTranslateSucces } from "../../store/videoPage/video.actions";
import { savePhraseRequest } from "../../store/study-sheets/sheets.actions";
import "./index.scss";

const TranslateModal = ({ captions, videoPlay }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(TextTranslateSucces(null, null));
    videoPlay();
  };

  const savaPhrase = () => {
    dispatch(savePhraseRequest(captions));
    dispatch(TextTranslateSucces(null, null));
  };

  const { original, translated } = captions;

  return (
    <div className="translate_modal">
      <h3>{original}</h3>
      <p className="translate_modal_title">Translation</p>
      <p>{translated}</p>
      <div className="translate_modal_btns">
        <button type="button" onClick={handleClick}>
          Cancel
        </button>
        <button type="button" onClick={savaPhrase}>
          Save
        </button>
      </div>
    </div>
  );
};

export default TranslateModal;
