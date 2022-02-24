import { User } from "interface/user";
import { AccountsActionType } from "./actionTypes";

interface GetAccountsAction {
  type: AccountsActionType.GET_ACCOUNTS;
}

interface GetAccountsSuccessAction {
  type: AccountsActionType.GET_ACCOUNTS_SUCCESS;
  payload: User[];
}

interface GetAccountsFailureAction {
  type: AccountsActionType.GET_ACCOUNTS_FAILURE;
  payload: string;
}

export type AccountsAction =
  | GetAccountsAction
  | GetAccountsSuccessAction
  | GetAccountsFailureAction;
