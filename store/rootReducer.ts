import { combineReducers } from "redux";
import accountsReducer from "./accounts/reducer";

const reducers = combineReducers({
  accounts: accountsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
