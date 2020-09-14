import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useError from "./";
import { dispatchMock } from "../../testUtils";
import { SET_ERROR } from "../../constants/actionTypes";

describe("useError tests", () => {
  test("should change call error dispatch", () => {
    React.useContext = jest.fn().mockImplementationOnce(() => {
      return {
        error: false,
        errorDispatch: dispatchMock
      };
    });

    const { result } = renderHook(() => useError());

    act(() => {
      result.current.setError(true);
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: SET_ERROR,
      payload: true
    });
  });
});
