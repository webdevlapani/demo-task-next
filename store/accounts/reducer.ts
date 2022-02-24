import { User } from "interface/user";
import { AccountsAction } from "./actions";
import { AccountsActionType } from "./actionTypes";

interface AccountsState {
  loading: boolean;
  error: string | null;
  data: User[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const accountsReducer = (
  state: AccountsState = initialState,
  action: AccountsAction
): AccountsState => {
  switch (action.type) {
    // Get All Accounts
    case AccountsActionType.GET_ACCOUNTS:
      return { loading: true, error: null, data: [] };
    case AccountsActionType.GET_ACCOUNTS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case AccountsActionType.GET_ACCOUNTS_FAILURE:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default accountsReducer;
