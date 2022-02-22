import { combineReducers } from "redux";
import accountsReducer from "./accountsReducer";

const reducers = combineReducers({
  accounts: accountsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
