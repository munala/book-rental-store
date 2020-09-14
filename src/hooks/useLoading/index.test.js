import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useLoading from "./";
import { dispatchMock } from "../../testUtils";
import { SET_LOADING } from "../../constants/actionTypes";

describe("useLoading tests", () => {
  test("should change call loading dispatch", () => {
    React.useContext = jest.fn().mockImplementationOnce(() => {
      return {
        loading: false,
        loadingDispatch: dispatchMock
      };
    });

    const { result } = renderHook(() => useLoading());

    act(() => {
      result.current.setLoading(true);
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: SET_LOADING,
      payload: true
    });
  });
});
