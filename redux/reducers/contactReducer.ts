import { ActionType } from '../action-types';
import { Action } from '../actions';

interface ContactState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: ContactState = initialState,
  action: Action
): ContactState => {
  switch (action.type) {
    case ActionType.GET_CONTACTS:
      return { loading: true, error: null, data: [] };
    case ActionType.GET_CONTACTS_SUCCESS:
      debugger
      return { loading: false, error: null, data: action.payload };
    case ActionType.GET_CONTACTS_FAILURE:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
