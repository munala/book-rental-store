import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import useError from "../hooks/useError";
import "react-toastify/dist/ReactToastify.css";

const ErrorWrapper = props => {
  const { error, setError } = useError();

  useEffect(() => {
    if (error) {
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
  }, [error, setError]);

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
