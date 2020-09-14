import reducer from "./";
import { SET_LOADING, SET_BOOKS } from "../../../constants/actionTypes";
import { books } from "../../../testUtils";

describe("books reducer", () => {
  test("it should set state", () => {
    const action = {
      type: SET_BOOKS,
      payload: true
    };

    const newState = reducer(books, action);

    expect(newState).toEqual(action.payload);
  });

  test("it should set default state", () => {
    const action = {
      type: SET_LOADING,
      payload: true
    };

    const newState = reducer(books, action);

    expect(newState).toEqual(books);
  });
});
