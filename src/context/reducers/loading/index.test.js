import reducer from "./";
import { SET_LOADING, SET_ERROR } from "../../../constants/actionTypes";
import { loading } from "../../../testUtils";

describe("loading reducer", () => {
  test("it should set state", () => {
    const action = {
      type: SET_LOADING,
      payload: true
    };

    const newState = reducer(loading, action);

    expect(newState).toEqual(action.payload);
  });

  test("it should set default state", () => {
    const action = {
      type: SET_ERROR,
      payload: true
    };

    const newState = reducer(loading, action);

    expect(newState).toEqual(loading);
  });
});
