import { combineReducers } from "redux";
import appReducer from "./appReducer";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
  app: appReducer,
  //   auth: authReducer,
  news: newsReducer
});
export default rootReducer;
