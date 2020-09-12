import axios from "axios";
import { API_URL } from "../../constants/services";
import { generateQueryStringFromParams } from "../../utils";

const instance = axios.create({
  baseURL: API_URL
});

export const getAllAuthors = async authorParams => {
  try {
    const queryString = generateQueryStringFromParams(authorParams);

    const author = await instance.get(`/authors${queryString}`);

    return author;
  } catch (error) {
    console.log(error);
  }
};

export const getAuthor = async id => {
  try {
    const author = await instance.get(`/authors/${id}`);

    return author;
  } catch (error) {
    console.log(error);
  }
};
