import axios from "axios";
import { Dispatch } from "react";
import { AccountsAction } from "store/accounts/actions";
import { AccountsActionType } from "store/accounts/actionTypes";

export const getAccounts = () => {
  return async (dispatch: Dispatch<AccountsAction>) => {
    dispatch({
      type: AccountsActionType.GET_ACCOUNTS,
    });

    await axios
      .get("http://localhost:3000/api/user/", {})
      .then(({ data }) => {
        dispatch({
          type: AccountsActionType.GET_ACCOUNTS_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: AccountsActionType.GET_ACCOUNTS_FAILURE,
          payload: err.message,
        });
      });
  };
};
