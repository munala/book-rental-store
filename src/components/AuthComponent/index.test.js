import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";
import AuthComponent from "./";

describe("AuthComponent tests", () => {
  test("should render", () => {
    const loginMode = true;
    const message = "";
    const setMessage = jest.fn();
    const onSubmit = jest.fn();

    const tree = renderer
      .create(
        <MemoryRouter initialEntries={["/login"]}>
          <AuthComponent
            loginMode={loginMode}
            message={message}
            setMessage={setMessage}
            onSubmit={onSubmit}
          />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
