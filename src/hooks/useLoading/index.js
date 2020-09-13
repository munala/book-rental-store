import { useContext } from "react";
import LoadingContext from "../../context/state/loading";
import { SET_LOADING } from "../../constants/actionTypes";

const useLoading = () => {
  const { loading, loadingDispatch: dispatch } = useContext(LoadingContext);

  const setLoading = loadingMessage => {
    dispatch({ type: SET_LOADING, payload: loadingMessage });
  };

  return { loading, setLoading };
};

export default useLoading;
