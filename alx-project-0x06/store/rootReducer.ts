import { combineReducers } from "redux";
import countReducer from "./slices/countSlice";

const rootReducer = combineReducers({
  count: countReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
