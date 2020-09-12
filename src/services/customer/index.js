import axios from "axios";
import { API_URL } from "../../constants/services";

const instance = axios.create({
  baseURL: API_URL
});

export const registerCustomer = async (dispatch, customer) => {
  try {
    const response = instance.post("/customers", customer);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const loginCustomer = async (dispatch, customer) => {
  try {
    const response = instance.get("/customers", customer);
    return response;
  } catch (error) {
    console.log(error);
  }
};
