import { useReducer } from "react";
import { initialState } from "../context/state/error";
import errorReducer from "../context/reducers/error";
import { SET_ERROR } from "../constants/actionTypes";

const useError = () => {
  const [error, dispatch] = useReducer(errorReducer, initialState);

  const setError = errorMessage => {
    dispatch({ action: SET_ERROR, payload: errorMessage });
  };

  return { error, setError };
};

export default useError;
