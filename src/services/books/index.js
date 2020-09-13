import axios from "axios";
import { API_URL } from "../../constants/services";
import { generateQueryStringFromParams } from "../../utils";

const instance = axios.create({
  baseURL: API_URL
});

export const getAllBooksList = async bookParams => {
  try {
    const queryString = generateQueryStringFromParams(bookParams);

    const { data } = await instance.get(`/books${queryString}`);

    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const getSingleBook = async id => {
  try {
    const { data } = await instance.get(`/books/${id}`);

    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
