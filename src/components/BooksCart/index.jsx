import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  DAILY_RENTAL,
  REGULAR_RENTAL,
  FICTION_RENTAL,
  NOVEL_RENTAL
} from "../../constants/rentals";
import "./styles.css";

const BooksCart = ({ cart, removeFromCart, clearCart, hide }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const rentalMappings = {
    regular: REGULAR_RENTAL,
    fiction: FICTION_RENTAL,
    novel: NOVEL_RENTAL
  };

  useEffect(() => {
    prcoessCartItems();
  }, [cart]);

  useEffect(() => {
    const totalAmount = cartItems.reduce(
      (previousTotal, item) =>
        previousTotal +
        item.duration *
          item.quantity *
          rentalMappings[item.genre] *
          DAILY_RENTAL,
      0
    );

    setTotal(totalAmount);
  }, [cartItems]);

  const changeValue = ({ item, property, value }) => {
    const newCartItems = cartItems.map(cartItem => {
      return cartItem.id === item.id
        ? {
            ...cartItem,
            [property]: value < 0 ? 0 : value
          }
        : cartItem;
    });

    setCartItems(newCartItems);
  };

  // add quantity and number of days, default 1
  const prcoessCartItems = useCallback(() => {
    const newCartItems = cart.map(item => {
      const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

      if (existingItem) return existingItem;

      return {
        ...item,
        duration: 1,
        quantity: 1
      };
    });

    setCartItems(newCartItems);
  }, [cartItems]);

  return (
    <div>
      <div className="cart-list-container">
        <ListGroup as="ul" className="cart-list">
          <ListGroup.Item
            as="li"
            className={"cart-list-item cart-list-item-select"}
          >
            <div className="cart-list-title"></div>

            <div className="cart-list-item-right">
              <div className="cart-list-count">Books X</div>

              <div className="cart-list-count">
                <div className="cart-list-count-value">Days X</div>
              </div>

              <Button
                variant={"primary center-align cart-button"}
                onClick={hide}
              >
                Add More Books
              </Button>
            </div>
          </ListGroup.Item>

          {cartItems.map((item, index, list) => {
            return (
              <ListGroup.Item
                key={item.id}
                as="li"
                className={`cart-list-item ${
                  index === list.length - 1 ? "cart-list-last-item" : ""
                }`}
              >
                <div className="cart-list-title">{item.title}</div>
                <div className="cart-list-item-right">
                  <div className="cart-list-count">
                    <Form.Control
                      className="cart-list-count-value"
                      type="number"
                      aria-label=""
                      onChange={({ target: { value } }) =>
                        changeValue({ item, property: "quantity", value })
                      }
                      value={item.quantity}
                    />
                  </div>

                  <div className="cart-list-count">
                    <Form.Control
                      className="cart-list-count-value"
                      type="number"
                      aria-label=""
                      onChange={({ target: { value } }) =>
                        changeValue({ item, property: "duration", value })
                      }
                      value={item.duration}
                    />
                  </div>

                  <Button
                    variant={"outline-primary center-align cart-button"}
                    onClick={() => removeFromCart(item)}
                  >
                    Remove From Cart
                  </Button>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>

      <div className="totals-row">
        <div className="totals-row-left">
          <span className="totals-row-title">Total: </span>
          <span className="totals-row-value">${total}</span>
        </div>

        <Button
          variant={"primary center-align cart-button"}
          onClick={() => clearCart()}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

BooksCart.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
  hide: PropTypes.func,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      genre: PropTypes.genre
    })
  ).isRequired
};

export default BooksCart;
