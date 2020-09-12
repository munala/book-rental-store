import React from "react";
import PropTypes from "prop-types";

import { DAILY_RENTAL } from "../../constants/rentals";
import BookingChargesComponent from "../../components/BookingChargesComponent";

const BookingChargesContainer = ({ error, loading }) => {
  const getRental = ({ quantity, numberOfDays }) => {
    return quantity * numberOfDays * DAILY_RENTAL;
  };

  return (
    <BookingChargesComponent
      getRental={getRental}
      error={error}
      loading={loading}
    />
  );
};

BookingChargesContainer.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.boolean
};

export default BookingChargesContainer;
