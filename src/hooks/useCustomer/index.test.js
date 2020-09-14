import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useCustomer from "./";
import { dispatchMock, customer } from "../../testUtils";
import { LOGIN } from "../../constants/actionTypes";
import { loginCustomer, registerCustomer } from "../../services/customer";

jest.mock("../../services/customer");

describe("useCustomer tests", () => {
  beforeEach(() => {
    React.useContext = jest.fn().mockImplementationOnce(() => {
      return {
        customer,
        customerDispatch: dispatchMock
      };
    });

    loginCustomer.mockImplementationOnce(async () => {
      return { data: customer };
    });

    registerCustomer.mockImplementationOnce(async () => {
      return { data: customer };
    });
  });

  test("should change call customer dispatch", () => {
    const { result } = renderHook(() => useCustomer());

    act(() => {
      result.current.setCustomer(customer);
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: LOGIN,
      payload: customer
    });
  });

  test("should login", () => {
    const { result } = renderHook(() => useCustomer());

    act(() => {
      result.current.login().then(({ data }) => {
        expect(data).toEqual(customer);
      });
    });
  });

  test("should register", () => {
    const { result } = renderHook(() => useCustomer());

    act(() => {
      result.current.register().then(({ data }) => {
        expect(data).toEqual(customer);
      });
    });
  });
});
