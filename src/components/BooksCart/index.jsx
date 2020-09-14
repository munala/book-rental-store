import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  REGULAR_RENTAL,
  FICTION_RENTAL,
  NOVEL_RENTAL,
  REGULAR_MINIMUM_RENTAL,
  REGULAR_MINIMUM_DAYS,
  NOVEL_MINIMUM_RENTAL,
  NOVEL_MINIMUM_DAYS,
  FICTION_MINIMUM_RENTAL,
  FICTION_MINIMUM_DAYS,
  REGULAR_AFTER_MINIMUM_RENTAL,
  FICTION_AFTER_MINIMUM_RENTAL,
  NOVEL_AFTER_MINIMUM_RENTAL
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

  const rentalMinimumMappings = {
    regular: REGULAR_MINIMUM_RENTAL,
    fiction: FICTION_MINIMUM_RENTAL,
    novel: NOVEL_MINIMUM_RENTAL
  };

  const rentalAfterMinimumMappings = {
    regular: REGULAR_AFTER_MINIMUM_RENTAL,
    fiction: FICTION_AFTER_MINIMUM_RENTAL,
    novel: NOVEL_AFTER_MINIMUM_RENTAL
  };

  const rentalMinimumDaysMappings = {
    regular: REGULAR_MINIMUM_DAYS,
    fiction: FICTION_MINIMUM_DAYS,
    novel: NOVEL_MINIMUM_DAYS
  };

  // add quantity and number of days, default 1
  const processCartItems = useCallback(() => {
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
  }, [cart]);

  const calculateRental = useCallback(
    item => {
      let totalCharge = 0;

      const numberOfDaysBeforeExtraCharge =
        rentalMinimumDaysMappings[item.genre];

      // normal charge before minimum number of days
      const chargesForMinimumDays =
        rentalMappings[item.genre] *
        item.quantity *
        numberOfDaysBeforeExtraCharge;

      // check if normal charge is greater than minimim otherwise use minimum
      totalCharge +=
        chargesForMinimumDays > rentalMinimumMappings[item.genre]
          ? chargesForMinimumDays
          : rentalMinimumMappings[item.genre];

      // check if duration has exceeded minimum than add additional charges for extra days
      if (item.duration > numberOfDaysBeforeExtraCharge) {
        const extraDays = item.duration - numberOfDaysBeforeExtraCharge;
        const extraCharge = extraDays * rentalAfterMinimumMappings[item.genre];

        totalCharge += extraCharge;
      }

      return totalCharge;
    },
    [cartItems]
  );

  useEffect(() => {
    processCartItems();
  }, [cart, processCartItems]);

  useEffect(() => {
    const totalAmount = cartItems.reduce(
      (previousTotal, item) => previousTotal + calculateRental(item),
      0
    );

    setTotal(totalAmount);
  }, [cartItems, setTotal]);

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
