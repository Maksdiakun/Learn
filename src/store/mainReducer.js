import { combineReducers } from "redux";
import searchReducer from "./search/search.reducer";
import general from "./general/general.reducer";
import user from "./user/user.reducer";
import video from "./videoPage/video.reducer";
import sheets from "./study-sheets/sheets.reducer";
import home from "./home/home.reducer";
import library from "./library/library.reducer";

const rootReducer = combineReducers({
  video,
  home,
  searchReducer,
  general,
  user,
  sheets,
  library,
});

export default rootReducer;
