import { useReducer } from "react";
import { initialState } from "../../context/state/loading";
import loadingReducer from "..../context/reducers/loading";
import { SET_LOADING } from "../../constants/actionTypes";

const useLoading = () => {
  const [loading, dispatch] = useReducer(loadingReducer, initialState);

  const setLoading = loadingState => {
    dispatch({ action: SET_LOADING, payload: loadingState });
  };

  return { loading, setLoading };
};

export default useLoading;
