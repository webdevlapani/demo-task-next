import axios from "axios";
import { Dispatch } from "react";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const getAccounts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_ACCOUNTS,
    });

    await axios
      .get("http://localhost:3000/api/user/", {})
      .then(({ data }) => {
        dispatch({
          type: ActionType.GET_ACCOUNTS_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionType.GET_ACCOUNTS_FAILURE,
          payload: err.message,
        });
      });
  };
};
