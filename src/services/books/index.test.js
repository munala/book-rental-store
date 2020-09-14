import axios from "axios";
import { getAllBooksList } from "./";

jest.mock("axios");

const mockBoooks = [
  {
    id: 1,
    title: "Jurassic Park",
    author: "Michael Crichton",
    genre: "action"
  }
];

describe("Books Service success rwquest tests", () => {
  test("Gets books successfully", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockBoooks })
    );

    return getAllBooksList().then(data => expect(data).toEqual(mockBoooks));
  });
});

const genericError = "generic error";

describe("Books Service failed request tests", () => {
  test("Throws error on get", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(genericError))
    );

    return getAllBooksList().catch(error =>
      expect(error.message).toEqual(genericError)
    );
  });
});
