import { useContext } from "react";
import ErrorContext from "../../context/state/error";
import { SET_ERROR } from "../../constants/actionTypes";

const useError = () => {
  const { error, errorDispatch: dispatch } = useContext(ErrorContext);

  const setError = errorMessage => {
    dispatch({ type: SET_ERROR, payload: errorMessage });
  };

  return { error, setError };
};

export default useError;
