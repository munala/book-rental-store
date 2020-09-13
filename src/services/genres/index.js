import axios from "axios";
import { API_URL } from "../../constants/services";
import { generateQueryStringFromParams } from "../../utils";

const instance = axios.create({
  baseURL: API_URL
});

export const getAllGenres = async genreParams => {
  try {
    const queryString = generateQueryStringFromParams(genreParams);

    const { data } = await instance.get(`/genres${queryString}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getGenre = async id => {
  try {
    const { data } = await instance.get(`/genres/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
