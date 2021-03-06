import { SET_ERROR } from "../../../constants/actionTypes";
import { initialState } from "../../state/error";

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ERROR:
      return payload;

    default:
      return state;
  }
};
