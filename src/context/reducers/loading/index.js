import * as actionTypes from "../../../constants/actionTypes";
import { initialState } from "../../stat/loading";

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_LOADING:
      return payload;

    default:
      return state;
  }
};
