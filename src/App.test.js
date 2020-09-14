import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  const getById = queryByAttribute.bind(null, "id");

  const { container } = render(<App />);

  const app = getById(container, "App");

  expect(app).toBeInTheDocument();
});
