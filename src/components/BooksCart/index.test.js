import React from "react";
import renderer from "react-test-renderer";
import BooksCart from "./";
import { books } from "../../testUtils";

describe("BooksCart tests", () => {
  test("should render", () => {
    const removeFromCart = jest.fn();
    const clearCart = jest.fn();
    const hide = jest.fn();
    const cart = books;

    const tree = renderer
      .create(
        <BooksCart
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          hide={hide}
          cart={cart}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
