import reducer from "./";
import { SET_LOADING, SET_ERROR } from "../../../constants/actionTypes";
import { error } from "../../../testUtils";

describe("error reducer", () => {
  test("it should set state", () => {
    const action = {
      type: SET_ERROR,
      payload: true
    };

    const newState = reducer(error, action);

    expect(newState).toEqual(action.payload);
  });

  test("it should set default state", () => {
    const action = {
      type: SET_LOADING,
      payload: true
    };

    const newState = reducer(error, action);

    expect(newState).toEqual(error);
  });
});
