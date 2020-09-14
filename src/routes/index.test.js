import React from "react";
import { render } from "@testing-library/react";
import {
  createHistory,
  createMemorySource,
  LocationProvider
} from "@reach/router";
import "@testing-library/jest-dom/extend-expect";
import Routes from "./";
import useCustomer from "../hooks/useCustomer";
import useError from "../hooks/useError";
import useBooks from "../hooks/useBooks";
import useLoading from "../hooks/useLoading";
import { customer } from "../testUtils";

jest.mock("../hooks/useCustomer");
jest.mock("../hooks/useError");
jest.mock("../hooks/useBooks");
jest.mock("../hooks/useLoading");

const renderWithRouter = (
  ui,
  { route = "/", history = createHistory(createMemorySource(route)) } = {}
) => {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    history
  };
};

describe("Routes tests", () => {
  beforeAll(() => {
    useError.mockImplementation(() => ({ error: null, setError: () => {} }));
    useBooks.mockImplementation(() => ({ books: [], setBooks: () => {} }));
    useLoading.mockImplementation(() => ({
      loading: false,
      setLoading: () => {}
    }));
  });

  test("should render books page", async () => {
    useCustomer.mockImplementation(() => ({ customer }));

    const {
      container,
      history: { navigate }
    } = renderWithRouter(<Routes />);

    await navigate("/books");

    expect(container.innerHTML).toMatch("View Cart");
  });

  test("should render login page if not logged in", async () => {
    useCustomer.mockImplementation(() => ({ customer: {} }));

    const {
      container,
      history: { navigate }
    } = renderWithRouter(<Routes />);

    await navigate("/books");

    expect(container.innerHTML).toMatch("Login");
  });
});
