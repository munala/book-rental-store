import * as actionTypes from "../../../constants/actionTypes";
import { initialState } from "../../state/customer";

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.REGISTER:
      return payload;

    case actionTypes.LOGIN:
      return payload;

    case actionTypes.LOGOUT:
      return initialState;

    default:
      return state;
  }
};
