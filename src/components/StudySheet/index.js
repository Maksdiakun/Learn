import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import sheetsImg from "../../static/images/sheets2.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoPhrasesRequest } from "../../store/study-sheets/sheets.actions";
import StudySheetsList from "../StudySheetList";

const StudySheet = ({ id }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { videoSheets } = useSelector((state) => state.sheets);

  const showFunc = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    dispatch(fetchVideoPhrasesRequest(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className={`notes_section ${show ? "notes_section_active" : ""}`}>
      <div className="notes_header" onClick={showFunc}>
        <button type="button">
          <img src={sheetsImg} alt="" />
        </button>
        <h3>Study sheet</h3>
      </div>
      {videoSheets && <StudySheetsList list={videoSheets} video_id={id} />}
      <Link className="rounded_btn" to="/sheets">
        View sheet
      </Link>
    </div>
  );
};

export default StudySheet;
