import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "../../components/UiComponents/Select";
import SearchIcon from "../../components/icons/SearchIcon";
import StudySheetGroup from "../../components/StudySheetGroup";
import {
  fetchPhrasesRequest,
  fetchOnPaginationSheets,
  searchPhrasesRequest,
  sortByRequest,
} from "../../store/study-sheets/sheets.actions";
import "./index.scss";

const select2 = {
  defaultSelectText: "Date",
  list: [
    {
      value: "-created_at",
      name: "Newest",
    },
    {
      value: "created_at",
      name: "Oldest",
    },
  ],
};

const SheetsPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchVal, setSearchVal] = useState(null);
  const dispatch = useDispatch();
  const {
    sheets: { sheetsList },
  } = useSelector((state) => state);

  const handleChange = ({ target }) => {
    setSearchVal(target.value);
  };
  const selectAction = ({ value }) => {
    dispatch(sortByRequest(value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPhrasesRequest(searchVal));
  };

  const loadCLick = () => {
    dispatch(fetchOnPaginationSheets(sheetsList.nextPage));
  };

  useEffect(() => {
    dispatch(fetchPhrasesRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="study_sheet_page">
      <h1 className="page_title">Study sheets </h1>
      <div className="study_sheet_header">
        <form className="sheets_search" onSubmit={handleSubmit}>
          <div className="sheets_search_field">
            <SearchIcon />
            <input
              type="text"
              placeholder="Enter the word you are searching for...  "
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="form_btn">
            Search
          </button>
        </form>
        <Select
          optionsList={select2.list}
          defaultText={select2.defaultSelectText}
          selectAction={selectAction}
        >
          <p>Sort by</p>
        </Select>
      </div>
      <div className="grey_line"></div>
      <div className="study_sheet_section">
        <ul>
          {sheetsList?.data &&
            sheetsList.data.map((el) => (
              <StudySheetGroup
                sheets={el.studysheets}
                id={el.video_id}
                key={el.video_id}
                title={el.title}
                date={el.updated_at}
                study_id={el.id}
              />
            ))}
        </ul>
      </div>
      {sheetsList.nextPage && (
        <button onClick={loadCLick} className="rounded_btn">
          Load More
        </button>
      )}
    </div>
  );
};

export default SheetsPage;
