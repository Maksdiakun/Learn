import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchTextTranslate } from "../../store/videoPage/video.actions";
import { captionText, seconds } from "../../helpers/generalHelpers";
import "./index.scss";

const Captions = ({ videoTime = 0, videoPlay }) => {
  const { id } = useParams();
  const { subtitlesOriginal } = useSelector((state) => state.video.subtitles);
  const [state, setState] = useState({ text: undefined });
  const dispatch = useDispatch();

  useEffect(() => {
    if (subtitlesOriginal) {
      setState(() => {
        const caption = captionText(subtitlesOriginal, videoTime);
        return caption;
      });
    }
  }, [subtitlesOriginal, videoTime]);

  if (!subtitlesOriginal) {
    return <></>;
  }

  const selectText = () => {
    const text = window.getSelection();
    dispatch(fetchTextTranslate(text.toString(), seconds(state.start), id));
  };

  const funcStop = () => {
    videoPlay();
  };

  return (
    <p className="captions">
      <p className="cap_label">
        Original
      </p>
      <span onSelect={selectText} onMouseDown={funcStop} onMouseUp={selectText}>
        {state?.text}
      </span>
    </p>
  );
};

export default Captions;
