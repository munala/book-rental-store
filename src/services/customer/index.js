import axios from "axios";
import { API_URL } from "../../constants/services";
import { generateQueryStringFromParams } from "../../utils";

const instance = axios.create({
  baseURL: API_URL
});

export const registerCustomer = async customer => {
  try {
    const { data } = await instance.post("/customers", customer);

    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const loginCustomer = async customerCredentials => {
  try {
    const queryString = generateQueryStringFromParams(customerCredentials);

    const { data } = await instance.get(`/customers${queryString}`);

    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
