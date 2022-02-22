import { ActionType } from "../action-types";
import { Action, User } from "../actions";

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

const reducer = (
  state: AccountsState = initialState,
  action: Action
): AccountsState => {
  switch (action.type) {
    case ActionType.GET_ACCOUNTS:
      return { loading: true, error: null, data: [] };
    case ActionType.GET_ACCOUNTS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.GET_ACCOUNTS_FAILURE:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
