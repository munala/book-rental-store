import React from "react";
import renderer from "react-test-renderer";
import BooksComponent from "./";
import { books } from "../../testUtils";

describe("BooksComponent tests", () => {
  test("should render", () => {
    const loadBooks = jest.fn();
    const search = jest.fn();

    const tree = renderer
      .create(
        <BooksComponent loadBooks={loadBooks} search={search} books={books} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
