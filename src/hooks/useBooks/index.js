import { useContext } from "react";
import BooksContext from "../../context/state/books";
import { getAllBooksList } from "../../services/books";
import { SET_BOOKS } from "../../constants/actionTypes";

const useBooks = () => {
  const { books, booksDispatch: dispatch } = useContext(BooksContext);

  const getBooks = bookParams => getAllBooksList(bookParams);

  const setBooks = books => {
    dispatch({ type: SET_BOOKS, payload: books });
  };

  return { books, getBooks, setBooks };
};

export default useBooks;
