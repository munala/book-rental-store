import * as actionTypes from "../../constants/actionTypes";
import { initialState } from "./state";

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_BOOKS:
      return payload;

    default:
      return state;
  }
};
