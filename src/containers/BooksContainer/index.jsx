import React from "react";
import PropTypes from "prop-types";
import useError from "../hooks/useError";
import useLoading from "../hooks/useLoading";
import useBooks from "../hooks/useBooks";

import BooksComponent from "../../components/BooksComponent";

const BooksContainer = () => {
  const { books, getBooks } = useBooks();
  const { error, setError } = useError();
  const { loading, setLoading } = useLoading();

  return (
    <BooksComponent
      books={books}
      getBooks={getBooks}
      error={error}
      loading={loading}
      setError={setError}
      setLoading={setLoading}
    />
  );
};

BooksContainer.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.boolean
};

export default BooksContainer;
