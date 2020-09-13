export const generateQueryStringFromParams = queryParams => {
  let queryString = "";

  Object.keys(queryParams).forEach((key, index, keys) => {
    const value = queryParams[key];

    if (value) {
      queryString = `${queryString}${index === 0 ? "?" : ""}${key}=${value}${
        index < keys.length - 1 ? "&" : ""
      }`;
    }
  });

  return queryString;
};
