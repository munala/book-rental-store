import { useContext } from "react";
import CustomerContext from "../../context/state/customer";
import { registerCustomer, loginCustomer } from "../../services/customer";
import { LOGIN } from "../../constants/actionTypes";

const useCustomer = () => {
  const { customer, customerDispatch: dispatch } = useContext(CustomerContext);

  const login = customerCredentials => loginCustomer(customerCredentials);

  const register = customerCredentials => registerCustomer(customerCredentials);

  const setCustomer = customerDetails => {
    dispatch({ type: LOGIN, payload: customerDetails });
  };

  const logout = () => {};

  return { customer, login, register, logout, setCustomer };
};

export default useCustomer;
