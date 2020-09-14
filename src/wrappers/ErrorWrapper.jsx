import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import useError from "../hooks/useError";
import "react-toastify/dist/ReactToastify.css";

const ErrorWrapper = props => {
  const { error, setError } = useError();

  const [stateError, setStateError] = useState(null);

  useEffect(() => {
    if (error !== stateError) {
      setStateError(error);
      toast.error(error, {
        position: "bottom-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 100,
        onClose: () => setError(null)
      });
    }
  }, [error, setError, stateError, setStateError]);

  return (
    <>
      <ToastContainer />
      {props.children}
    </>
  );
};

ErrorWrapper.propTypes = {
  children: PropTypes.element.isRequired
};

export default ErrorWrapper;
