import React from "react";
import PropTypes from "prop-types";
import useError from "../hooks/useError";
import useLoading from "../hooks/useLoading";
import { DAILY_RENTAL } from "../../constants/rentals";
import BookingChargesComponent from "../../components/BookingChargesComponent";

const BookingChargesContainer = () => {
  const { error, setError } = useError();
  const { loading, setLoading } = useLoading();

  const getRental = ({ quantity, numberOfDays }) => {
    return quantity * numberOfDays * DAILY_RENTAL;
  };

  return (
    <BookingChargesComponent
      getRental={getRental}
      error={error}
      loading={loading}
      setError={setError}
      setLoading={setLoading}
    />
  );
};

BookingChargesContainer.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.boolean
};

export default BookingChargesContainer;
