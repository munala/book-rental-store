import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useCustomer from "../../hooks/useCustomer";
import useError from "../../hooks/useError";
import useLoading from "../../hooks/useLoading";
import AuthComponent from "../../components/AuthComponent";

const CustomerContainer = () => {
  const { customer, logout, setCustomer, ...customerState } = useCustomer();
  const { error, setError } = useError();
  const { loading, setLoading } = useLoading();
  const { pathname } = useLocation();
  const history = useHistory();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (customer?.id && !message) {
      history.push("books");
    }
  }, [customer, message, history]);

  const login = async customerData => {
    setLoading(true);

    try {
      const [loggenInCustomer] = await customerState.login(customerData);

      if (loggenInCustomer) {
        setCustomer(loggenInCustomer);

        return;
      }

      setError("Wrong email and/or customer ID.");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const register = async customerData => {
    setLoading(true);

    try {
      const newCustomer = await customerState.register({
        email: customerData.email
      });

      setMessage(
        `Your registration was successful. You customer ID is ${newCustomer.id}. You will need it to login.`
      );

      setCustomer(newCustomer);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthComponent
      customer={customer}
      logout={logout}
      onSubmit={pathname === "/login" ? login : register}
      error={error}
      setError={setError}
      setLoading={setLoading}
      loading={loading}
      loginMode={pathname === "/login"}
      message={message}
      setMessage={setMessage}
    />
  );
};

export default CustomerContainer;
