import axios from "axios";
import { API_URL } from "../../constants/services";
import { generateQueryStringFromParams } from "../../utils";

const instance = axios.create({
  baseURL: API_URL
});

export const getAllAuthors = async authorParams => {
  try {
    const queryString = generateQueryStringFromParams(authorParams);

    const { data } = await instance.get(`/authors${queryString}`);

    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const getAuthor = async id => {
  try {
    const { data } = await instance.get(`/authors/${id}`);

    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
