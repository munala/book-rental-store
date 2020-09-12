import { useReducer } from "react";
import { initialState } from "../../context/state/customer";
import customerReducer from "../../context/reducers/customer";
import { registerCustomer, loginCustomer } from "../../services/customer";
import { LOGOUT } from "../../constants/actionTypes";

const useCustomer = () => {
  const [customer, dispatch] = useReducer(customerReducer, initialState);

  const login = customer => loginCustomer(dispatch, customer);

  const register = customer => registerCustomer(dispatch, customer);

  const logout = () => dispatch({ action: LOGOUT });

  return { customer, login, register, logout };
};

export default useCustomer;
