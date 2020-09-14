import React from "react";
import axios from "axios";
import { mount } from "enzyme";
import BooksContainer from "./";
import BooksComponent from "../../components/BooksComponent";
import { MockBooksComponent, books as mockBooks } from "../../testUtils";
import useBooks from "../../hooks/useBooks";
import useError from "../../hooks/useError";
import useLoading from "../../hooks/useLoading";

const mockSetError = jest.fn();
const mockSetBooks = jest.fn();
const mockGetBooks = jest.fn();
const mockSetLoading = jest.fn();

jest.mock("../../components/BooksComponent");
jest.mock("../../hooks/useBooks");
jest.mock("../../hooks/useError");
jest.mock("../../hooks/useLoading");
jest.mock("axios");

describe("Books Container tests", () => {
  beforeEach(() => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockBooks })
    );

    useError.mockImplementation(() => {
      return {
        error: null,
        setError: mockSetError
      };
    });

    useBooks.mockImplementation(() => {
      return { books: [], setBooks: mockSetBooks, getBooks: mockGetBooks };
    });

    useLoading.mockImplementation(() => {
      return {
        loading: false,
        setLoading: mockSetLoading
      };
    });

    BooksComponent.mockImplementation(props => {
      return <MockBooksComponent {...props} />;
    });
  });

  test("should load books", () => {
    const wrapper = mount(<BooksContainer />);

    const buttons = wrapper.find("button");

    buttons.forEach(button => {
      button.simulate("click");
    });

    expect(mockGetBooks).toHaveBeenCalled();
    expect(mockSetLoading).toHaveBeenCalled();
  });
});
