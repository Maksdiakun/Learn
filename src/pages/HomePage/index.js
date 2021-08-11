import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uid } from "uuid";
import { useDebouncedCallback } from "use-debounce";
import {
  getCategories,
  getSuggestedVideos,
  suggestedOnPagination,
} from "../../store/home/home.actions";
import { fetchSearch } from "../../store/search/search.actions";
import CategoryItem from "../../components/UiComponents/CategoryItem";
import SmVideoItem from "../../components/SmVideoItem";
import "./index.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    home: { categories, suggestedVideos },
    general: { mainRef },
  } = useSelector((state) => state);

  const updateScroll = () => {
    dispatch(suggestedOnPagination(suggestedVideos.nextPage));
  };

  const debounced = useDebouncedCallback(updateScroll, 300);
  const eventHandler = (event) => {
    const fullHeight = event.target.scrollHeight;
    const height = event.target.clientHeight;
    const top = event.target.scrollTop;
    const scrollToEnd = top + height;
    if (scrollToEnd === fullHeight) {
      debounced.callback();
    }
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSuggestedVideos());
  }, [dispatch]);

  useEffect(() => {
    if (mainRef) {
      mainRef.addEventListener("scroll", eventHandler);

      return () => mainRef.removeEventListener("wheel", eventHandler);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainRef]);

  const handleClick = ({ target }) => {
    console.log(target.value);
    dispatch(fetchSearch(target.value, history));
  };

  return (
    <div>
      <h1 className="page_title">Home</h1>
      <div className="width_125 category_list">
        {categories &&
          categories.map((e) => (
            <CategoryItem
              key={e.id}
              value={e.snippet.title}
              label={e.snippet.title}
              onClick={handleClick}
            />
          ))}
      </div>
      <div>
        <div className="video_row">
          {suggestedVideos.data?.map((e) => (
            <div className="col_4" key={uid()}>
              <SmVideoItem
                imgUrl={e.snippet.thumbnails.high.url}
                title={e.snippet.title}
                videoId={e.id.videoId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
