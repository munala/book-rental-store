import axios from "axios";
import { registerCustomer, loginCustomer } from "./";

jest.mock("axios");

const userDetails = {
  email: "this@guy.rocks",
  customerId: 1
};

describe("Customer Service success request tests", () => {
  test("Registers successfully", async () => {
    axios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: userDetails })
    );

    return registerCustomer(userDetails).then(data =>
      expect(data).toEqual(userDetails)
    );
  });

  test("Logs in successfully", () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: userDetails })
    );

    return loginCustomer(userDetails).then(data =>
      expect(data).toEqual(userDetails)
    );
  });
});

const genericError = "generic error";

describe("Customer Service failed request tests", () => {
  test("Throws error on registration", async () => {
    axios.post.mockImplementationOnce(() =>
      Promise.reject(new Error(genericError))
    );

    return registerCustomer(userDetails).catch(error =>
      expect(error.message).toEqual(genericError)
    );
  });

  test("Throws error on login", () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(genericError))
    );

    return loginCustomer(userDetails).catch(error => {
      expect(error.message).toEqual(genericError);
    });
  });
});
