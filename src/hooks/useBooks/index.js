import { useReducer } from "react";
import { initialState } from "../../context/state/books";
import booksReducer from "../../context/reducers/books";
import { getAllBooksList } from "../../services/books";

const useBooks = () => {
  const [books, dispatch] = useReducer(booksReducer, initialState);

  const getBooks = bookParams => getAllBooksList(dispatch, bookParams);

  return { books, getBooks };
};

export default useBooks;
