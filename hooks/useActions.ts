import { getContacts } from './../redux/action-creators/index';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, wrapper } from '../redux';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
