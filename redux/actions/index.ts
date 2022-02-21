import { ActionType } from '../action-types';

interface GetContactAction {
  type: ActionType.GET_CONTACTS;
}

interface GetContactSuccessAction {
  type: ActionType.GET_CONTACTS_SUCCESS;
  payload: string[];
}

interface GetContactFailureAction {
  type: ActionType.GET_CONTACTS_FAILURE;
  payload: string;
}

export type Action =
  | GetContactAction
  | GetContactSuccessAction
  | GetContactFailureAction;
