import React, { useReducer } from "react";
import PropTypes from "prop-types";
import customerReducer from "../context/reducers/customer";
import { initialState } from "../context/state/customer";
import { registerCustomer, loginCustomer } from "../services/customer";
import { LOGOUT } from "../constants/actionTypes";
import AuthComponent from "../components/AuthComponent";

const CustomerContainer = ({ error, loading }) => {
  const [state, dispatch] = useReducer(customerReducer, initialState);

  const login = customer => loginCustomer(dispatch, customer);

  const register = customer => registerCustomer(dispatch, customer);

  const logout = () => dispatch({ action: LOGOUT });

  return (
    <AuthComponent
      customer={state}
      login={login}
      register={register}
      logout={logout}
      error={error}
      loading={loading}
    />
  );
};

CustomerContainer.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.boolean
};

export default CustomerContainer;
