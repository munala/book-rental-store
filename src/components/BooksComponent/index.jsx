import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import BooksCart from "../BooksCart/";
import "./styles.css";

const BooksComponent = ({ books, loadBooks, search }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    loadBooks();
  }, []);

  useEffect(() => {
    if (!cart.length && showCart) {
      setShowCart(false);
    }
  }, [cart]);

  useEffect(() => {
    if (searchTerm) {
      search({
        title: searchTerm
      });
    } else {
      search({});
    }
  }, [searchTerm]);

  const checkInCart = bookId => {
    return cart.some(item => item.id === bookId);
  };

  const addToCart = book => {
    setCart(cart.concat(book));
  };

  const removeFromCart = book => {
    setCart(cart.filter(item => item.id !== book.id));
  };

  const clearCart = () => {
    setShowCart(false);
    setCart([]);
  };

  return (
    <div className="books-container">
      {showCart ? (
        <BooksCart
          cart={cart}
          clearCart={clearCart}
          removeFromCart={removeFromCart}
          hide={() => {
            setShowCart(false);
          }}
        />
      ) : (
        <>
          <div className="top-row">
            <Form.Control
              placeholder="start typing to search"
              value={searchTerm}
              aria-label="search"
              onChange={({ target: { value } }) => setSearchTerm(value)}
              className="search-input"
            />

            <Button
              disabled={!cart.length}
              variant="secondary cart-button"
              onClick={() => setShowCart(true)}
            >
              View Cart
              <Badge variant="primary">{cart.length || ""}</Badge>
              <span className="sr-only">unread messages</span>
            </Button>
          </div>

          <div className="books-list-container">
            <ListGroup as="ul" className="books-list">
              {books.map((book, index, list) => {
                const isInCart = checkInCart(book.id);
                const action = isInCart ? removeFromCart : addToCart;

                return (
                  <ListGroup.Item
                    key={book.id}
                    as="li"
                    className={`books-list-item ${
                      index === list.length - 1 ? "books-list-last-item" : ""
                    } ${isInCart ? " books-list-item-select" : ""}`}
                  >
                    <div>
                      <div className="books-list-title">{book.title}</div>

                      <div className="books-list-detail">
                        <i className="books-list-detail-header">by</i>&nbsp;
                        <span className="books-list-detail-value">
                          {book.author}
                        </span>
                      </div>

                      <div className="books-list-detail">
                        <i className="books-list-detail-header">under</i>&nbsp;
                        <span className="books-list-detail-value">
                          {book.genre}
                        </span>
                      </div>
                    </div>

                    <Button
                      variant={`${
                        isInCart ? "outline-" : ""
                      }primary center-align`}
                      onClick={() => action(book)}
                    >{`${isInCart ? "-" : "+"} ${
                      isInCart ? "Remove From" : "Add to"
                    } Cart`}</Button>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>

            {!books.length && (
              <div className="empty-state">
                Nothing to show here. <br />
                Change or clear search term to display books.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

BooksComponent.propTypes = {
  loadBooks: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      genre: PropTypes.genre
    }).isRequired
  )
};

export default BooksComponent;
