import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "react-bootstrap/ProgressBar";
import useLoading from "../hooks/useLoading";

const LoadingWrapper = props => {
  const { loading } = useLoading();

  return (
    <>
      {loading && <ProgressBar animated now={100} variant="custom" />}
      {props.children}
    </>
  );
};

LoadingWrapper.propTypes = {
  children: PropTypes.element.isRequired
};

export default LoadingWrapper;
