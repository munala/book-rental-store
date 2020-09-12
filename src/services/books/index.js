import axios from "axios";
import { API_URL } from "../../constants/services";
import { generateQueryStringFromParams } from "../../utils";

const instance = axios.create({
  baseURL: API_URL
});

export const getAllBooksList = async bookParams => {
  try {
    const queryString = generateQueryStringFromParams(bookParams);

    const book = await instance.get(`/books${queryString}`);

    return book;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleBook = async id => {
  try {
    const book = await instance.get(`/books/${id}`);

    return book;
  } catch (error) {
    console.log(error);
  }
};
