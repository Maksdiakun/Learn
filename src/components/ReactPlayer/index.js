import React from "react";
import ReactPlayerComponent from "react-player";

const ReactPLayer = ({ id }) => {
  return (
    <div>
      <ReactPlayerComponent
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
    </div>
  );
};

export default ReactPLayer;
