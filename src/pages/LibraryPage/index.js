import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uid } from "uuid";
import { getViewedVideo } from "../../store/library/library.actions";
import SmVideoItem from "../../components/SmVideoItem";
import Loader from "../../components/UiComponents/Loader";

const LibraryPage = () => {
  const dispatch = useDispatch();
  const {
    library: { history_video },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getViewedVideo());
  }, [dispatch]);

  return (
    <div>
      <h1 className="page_title">Library</h1>
      <div>
        <div className="video_row">
          {!history_video.pending && history_video.data ? (
            history_video.data?.map((e) => {
              const imgUrl =
                e.youtube_data?.items?.[0]?.snippet?.thumbnails?.high?.url;

              return (
                <div className="col_4" key={uid()}>
                  <SmVideoItem
                    imgUrl={imgUrl}
                    title={e.title}
                    videoId={e.video_id}
                  />
                </div>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
