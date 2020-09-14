import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import CustomerContainer from "./";
import AuthComponent from "../../components/AuthComponent";
import { MockCustomerComponent } from "../../testUtils";
import useCustomer from "../../hooks/useCustomer";
import useError from "../../hooks/useError";
import useLoading from "../../hooks/useLoading";

const mockSetError = jest.fn();
const mockSetCustomer = jest.fn();
const mockSetLoading = jest.fn();
const mockLogout = jest.fn();
const mockPush = jest.fn();

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: "/another-route"
  }),
  useHistory: jest.fn().mockImplementation(() => {
    return {
      push: mockPush
    };
  })
}));

jest.mock("../../components/AuthComponent");

jest.mock("../../hooks/useCustomer");

jest.mock("../../hooks/useError");

jest.mock("../../hooks/useLoading");

describe("Customer Container tests", () => {
  test("should call container methods", () => {
    useError.mockImplementation(() => {
      return {
        error: null,
        setError: mockSetError
      };
    });

    useCustomer.mockImplementation(() => {
      return { books: [], setCustomer: mockSetCustomer, logout: mockLogout };
    });

    useLoading.mockImplementation(() => {
      return {
        loading: false,
        setLoading: mockSetLoading
      };
    });

    AuthComponent.mockImplementation(props => {
      return <MockCustomerComponent {...props} />;
    });

    const wrapper = mount(
      <MemoryRouter initialEntries={["/register"]}>
        <CustomerContainer />
      </MemoryRouter>
    );

    const buttons = wrapper.find("button");

    buttons.forEach(button => {
      button.simulate("click");
    });

    expect(mockSetLoading).toHaveBeenCalled();
    expect(mockLogout).toHaveBeenCalled();
  });
});
