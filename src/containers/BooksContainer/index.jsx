import React, { useReducer } from "react";
import PropTypes from "prop-types";
import booksReducer from "../context/reducers/books";
import { initialState } from "../../context/state/books";
import { getAllBooksList } from "../../services/books";
import BooksComponent from "../../components/BooksComponent";

const BooksContainer = ({ error, loading }) => {
  const [state, dispatch] = useReducer(booksReducer, initialState);

  const getBooks = bookParams => getAllBooksList(dispatch, bookParams);

  return (
    <BooksComponent
      books={state}
      getBooks={getBooks}
      error={error}
      loading={loading}
    />
  );
};

BooksContainer.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.boolean
};

export default BooksContainer;
