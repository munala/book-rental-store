import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useBooks from "./";
import { dispatchMock, books } from "../../testUtils";
import { SET_BOOKS } from "../../constants/actionTypes";
import { getAllBooksList } from "../../services/books";

jest.mock("../../services/books");

describe("useBooks tests", () => {
  beforeEach(() => {
    React.useContext = jest.fn().mockImplementationOnce(() => {
      return {
        books,
        booksDispatch: dispatchMock
      };
    });

    getAllBooksList.mockImplementationOnce(async () => {
      return { data: books };
    });
  });

  test("should change call books dispatch", () => {
    const { result } = renderHook(() => useBooks());

    act(() => {
      result.current.setBooks(books);
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: SET_BOOKS,
      payload: books
    });
  });

  test("should get books", () => {
    const { result } = renderHook(() => useBooks());

    act(() => {
      result.current.getBooks().then(({ data }) => {
        expect(data).toEqual(books);
      });
    });
  });
});
