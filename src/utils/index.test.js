import { generateQueryStringFromParams } from "./";

describe("generateQueryStringFromParams tests", () => {
  test("it returns the correct query string", () => {
    const queryParams = {
      email: "this@guy.rocks",
      customerId: 1
    };

    const expectedQueryString = `?email=${queryParams.email}&customerId=${queryParams.customerId}`;

    const queryString = generateQueryStringFromParams(queryParams);

    expect(queryString).toEqual(expectedQueryString);
  });
});
