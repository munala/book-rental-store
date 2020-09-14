import React from "react";
import BooksContainer from "../../containers/BooksContainer";

const BooksPage = () => {
  return (
    <div className="books-page">
      <h3 className="text-center text-white pt-5">Book Rental Store</h3>
      <BooksContainer />
    </div>
  );
};

export default BooksPage;
