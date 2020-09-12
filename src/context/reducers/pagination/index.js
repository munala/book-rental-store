import * as actionTypes from "../../../constants/actionTypes";
import { initialState } from "../../state/pagination";

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_PAGINATION:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
