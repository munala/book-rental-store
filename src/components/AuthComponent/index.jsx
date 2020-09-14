import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AppModal from "../common/AppModal";
import { EMAIL_REGEX } from "../../constants/others";
import "./styles.css";

const AuthComponent = ({ loginMode, message, setMessage, onSubmit }) => {
  const pageText = loginMode ? "Login" : "Register";
  const optionButtonText = loginMode ? "Register" : "Login";
  const optionRoute = optionButtonText.toLowerCase();

  const [email, setEmail] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [errors, setErrors] = useState({});

  // clear email error
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const { email: emailError, ...otherErrors } = errors;

    setErrors({ ...otherErrors });
  }, [email, errors]);

  // clear customer id error
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const { customerId: customerIdError, ...otherErrors } = errors;

    setErrors({ ...otherErrors });
  }, [customerId, errors]);

  const modalButtons = [
    {
      action: () => setMessage(""),
      text: "OK"
    }
  ];

  const validateForm = () => {
    const errorObject = {};

    const emailRegex = RegExp(EMAIL_REGEX);

    if (!email) {
      errorObject.email = "Email is required";
    } else if (!emailRegex.test(email.toLowerCase())) {
      errorObject.email = "Invalid email";
    }

    if (loginMode && !customerId) {
      errorObject.customerId = "Customer ID is required";
    }

    if (Object.keys(errorObject).length) {
      setErrors(errorObject);
    }

    return Object.keys(errorObject).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit({
        email,
        id: customerId
      });
    }
  };

  return (
    <div id="login">
      <h3 className="text-center text-white pt-5">Book Rental Store</h3>

      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box">
              <Form>
                <h3 className="text-center text-info">{pageText}</h3>

                <Form.Group>
                  <Form.Label htmlFor="email" className="text-info">
                    Email:
                  </Form.Label>

                  <Form.Control
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={({ target: { value } }) => setEmail(value)}
                    isInvalid={!!errors.email}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                {loginMode && (
                  <Form.Group>
                    <Form.Label htmlFor="customer-id" className="text-info">
                      Customer ID:
                    </Form.Label>

                    <Form.Control
                      type="password"
                      value={customerId}
                      placeholder="Enter Customer ID"
                      onChange={({ target: { value } }) => setCustomerId(value)}
                      isInvalid={!!errors.customerId}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.customerId}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}

                <div className="bottom-row-auth">
                  <Button onClick={handleSubmit} className="login-button">
                    {pageText}
                  </Button>

                  <Link to={`/${optionRoute}`} className="text-info">
                    {optionButtonText}
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <AppModal
        show={!!message}
        message={message}
        buttons={modalButtons}
        onClose={() => setMessage(null)}
        title="Success"
      />
    </div>
  );
};

AuthComponent.propTypes = {
  loginMode: PropTypes.bool,
  message: PropTypes.string,
  setMessage: PropTypes.func,
  onSubmit: PropTypes.func
};

export default AuthComponent;
