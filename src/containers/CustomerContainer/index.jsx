import React from "react";
import useCustomer from "../hooks/useCustomer";
import useError from "../hooks/useError";
import useLoading from "../hooks/useLoading";
import AuthComponent from "../components/AuthComponent";

const CustomerContainer = () => {
  const { customer, login, register, logout } = useCustomer();
  const { error, setError } = useError();
  const { loading, setLoading } = useLoading();

  return (
    <AuthComponent
      customer={customer}
      login={login}
      register={register}
      logout={logout}
      error={error}
      setError={setError}
      setLoading={setLoading}
      loading={loading}
    />
  );
};

export default CustomerContainer;
