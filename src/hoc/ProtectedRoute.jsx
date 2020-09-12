import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import useCustomer from "../hooks/customer";

const ProtectedRoute = props => {
  const { customer } = useCustomer();

  const { path, exact = false, Component } = props;

  return (
    <Route
      path={path}
      render={props =>
        customer.id ? <Component {...props} /> : <Redirect to="/auth" />
      }
      exact={exact}
    />
  );
};

ProtectedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.string,
  Component: PropTypes.elementType.isRequired
};

export default ProtectedRoute;
