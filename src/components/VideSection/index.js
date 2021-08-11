import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import ReactPlayer from "react-player";
import SubtitlesList from "../../components/SubtitlesList";
import TranslateModal from "../../components/TranslateModal";
import { useDispatch, useSelector } from "react-redux";
import {
  getSubtitles,
  getVideoLanguage,
  watch_video,
} from "../../store/videoPage/video.actions";
import Captions from "../Captions";
import VideoLanguageSelect from "../VideoLanguageSelect";
import LangBtn from "../UiComponents/LangBtn";
import BackBtn from "../UiComponents/BackBtn";
import Loader from "../UiComponents/Loader";

const VideSection = ({ id }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const {
    video: {
      subtitles: {
        languages: { original_lang, pending, available_languages },
      },
      video_id,
      focusCaptions,
    },
    user: { info },
    general: { language },
  } = useSelector((state) => state);

  const [state, setState] = useState({
    playingTime: 0,
    playing: false,
  });
  const [langModal, setlangModal] = useState(false);

  const langModalShow = (val) => {
    setlangModal(val);
  };

  useEffect(() => {
    dispatch(getVideoLanguage(id));
    dispatch(watch_video(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(getSubtitles(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);
  const progressFunc = (props) => {
    setState((prevState) => {
      return {
        ...prevState,
        playingTime: props.playedSeconds,
      };
    });
  };

  const videoPlay = (param) => () => {
    setState({ ...state, playing: param });
  };

  return (
    <div className="video_wrap">
      {!pending ? (
        <div className="video_section">
          {window.innerWidth >= 768 && <BackBtn />}
          <LangBtn val={original_lang} langModalShow={langModalShow} />
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls={true}
            className="video_block"
            onProgress={progressFunc}
            playing={state.playing}
            onPlay={videoPlay(true)}
            config={{
              youtube: {
                playerVars: {
                  fs: 0,
                  modestbranding: 1,
                  rel: 0,
                },
              },
            }}
            ref={ref}
          />
          <Captions
            videoTime={state.playingTime}
            videoPlay={videoPlay(false)}
          />
          {focusCaptions.translated && (
            <TranslateModal
              captions={{
                user: info.id,
                video_id,
                ...focusCaptions,
              }}
              videoPlay={videoPlay(true)}
            />
          )}
          {langModal && available_languages && (
            <VideoLanguageSelect id={id} langModalShow={langModalShow} />
          )}
        </div>
      ) : (
        <Loader />
      )}
      <SubtitlesList videoTime={state.playingTime} />
    </div>
  );
};

export default VideSection;
