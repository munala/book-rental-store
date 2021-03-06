import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useCustomer from "../../hooks/useCustomer";
import useError from "../../hooks/useError";
import useLoading from "../../hooks/useLoading";
import AuthComponent from "../../components/AuthComponent";

const CustomerContainer = () => {
  const { customer, logout, setCustomer, ...customerState } = useCustomer();
  const { setError } = useError();
  const { setLoading } = useLoading();
  const { pathname } = useLocation();
  const history = useHistory();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (customer?.id && !message) {
      history.push("books");
    }
  }, [customer, message]);

  const login = async customerData => {
    setLoading(true);

    try {
      const [loggenInCustomer] = await customerState.login(customerData);

      if (loggenInCustomer) {
        setCustomer(loggenInCustomer);
      } else {
        setError("Wrong email and/or customer ID.");
      }
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
        `Registration was successful. Your customer ID is ${newCustomer.id}. You will need it when login next time.`
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
      loginMode={pathname === "/login"}
      message={message}
      setMessage={setMessage}
    />
  );
};

export default CustomerContainer;
