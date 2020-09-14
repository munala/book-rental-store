import reducer from "./";
import {
  SET_LOADING,
  LOGIN,
  REGISTER,
  LOGOUT
} from "../../../constants/actionTypes";
import { customer } from "../../../testUtils";
import { initialState } from "../../state/customer";

describe("customer reducer", () => {
  test("it should set state", () => {
    const action = {
      type: LOGIN,
      payload: true
    };

    const newState = reducer(customer, action);

    expect(newState).toEqual(action.payload);
  });

  test("it should set login state", () => {
    const action = {
      type: LOGIN,
      payload: true
    };

    const newState = reducer(customer, action);

    expect(newState).toEqual(action.payload);
  });

  test("it should set register state", () => {
    const action = {
      type: REGISTER,
      payload: true
    };

    const newState = reducer(customer, action);

    expect(newState).toEqual(action.payload);
  });

  test("it should set logout state", () => {
    const action = {
      type: LOGOUT,
      payload: true
    };

    const newState = reducer(customer, action);

    expect(newState).toEqual(initialState);
  });

  test("it should set default state", () => {
    const action = {
      type: SET_LOADING,
      payload: true
    };

    const newState = reducer(customer, action);

    expect(newState).toEqual(customer);
  });
});
