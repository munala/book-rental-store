import axios from "axios";
import { API_URL } from "../../constants/services";

const instance = axios.create({
  baseURL: API_URL
});

export const register = async user => {
  try {
    const customer = instance.post("/customers", user);
    return customer;
  } catch (error) {
    console.log(error);
  }
};

export const login = async user => {
  try {
    const customer = instance.get("/customers", user);
    return customer;
  } catch (error) {
    console.log(error);
  }
};
