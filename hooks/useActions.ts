import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { services } from "store";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(services, dispatch);
};
