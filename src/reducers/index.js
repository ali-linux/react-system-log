import { combineReducers } from "redux";
import logReducer from "./LogReducer";
import techReducer from "./TechReducer";
export default combineReducers({
  logFromReducer: logReducer,
  techFromReducer: techReducer,
});
