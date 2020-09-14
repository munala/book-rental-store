import React from "react";
import useError from "../../hooks/useError";
import useLoading from "../../hooks/useLoading";
import useBooks from "../../hooks/useBooks";
import BooksComponent from "../../components/BooksComponent";

const BooksContainer = () => {
  const { books, getBooks, setBooks } = useBooks();
  const { setError } = useError();
  const { setLoading } = useLoading();

  const loadBooks = async () => {
    setLoading(true);

    try {
      const books = await getBooks();

      setBooks(books);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const search = async bookParams => {
    try {
      const books = await getBooks(bookParams);

      setBooks(books);
    } catch (error) {
      setError(error);
    }
  };

  return <BooksComponent books={books} loadBooks={loadBooks} search={search} />;
};

export default BooksContainer;
