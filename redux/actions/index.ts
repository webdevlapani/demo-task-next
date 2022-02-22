import { ActionType } from "../action-types";

export interface User {
  id: number;
  name: string;
  age: number;
  amount: number;
  avatar: string;
  isCurrentAccount: boolean;
}

interface GetAccountsAction {
  type: ActionType.GET_ACCOUNTS;
}

interface GetAccountsSuccessAction {
  type: ActionType.GET_ACCOUNTS_SUCCESS;
  payload: User[];
}

interface GetAccountsFailureAction {
  type: ActionType.GET_ACCOUNTS_FAILURE;
  payload: string;
}

export type Action =
  | GetAccountsAction
  | GetAccountsSuccessAction
  | GetAccountsFailureAction;
