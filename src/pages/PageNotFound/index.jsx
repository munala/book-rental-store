import React from "react";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const PageNotFoundPage = () => {
  return (
    <Alert variant="danger" className="page-not-found">
      <Alert.Heading>Oopsies!</Alert.Heading>
      <p>
        You knocked on the wrong door. The page you are looking for does not
        exist. Maybe you are looking for{" "}
        <Link to={`/login`} className="text-info">
          login
        </Link>{" "}
        or{" "}
        <Link to={`/register`} className="text-info">
          register
        </Link>{" "}
        or{" "}
        <Link to={`/books`} className="text-info">
          books
        </Link>
      </p>
    </Alert>
  );
};

export default PageNotFoundPage;
