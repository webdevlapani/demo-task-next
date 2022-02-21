import axios from 'axios';
import { Dispatch } from 'react';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const getContacts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_CONTACTS,
    });

    await axios
      .get('http://localhost:3001/api/user/', {
      })
      .then(({ data }) => {
        dispatch({
          type: ActionType.GET_CONTACTS_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionType.GET_CONTACTS_FAILURE,
          payload: err.message,
        });
      });
  };
};
