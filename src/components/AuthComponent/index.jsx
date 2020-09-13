import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../common/Modal";

const AuthComponent = ({ loginMode, message, setMessage, onSubmit }) => {
  const pageText = loginMode ? "Login" : "Register";
  const optionButtonText = loginMode ? "Register" : "Login";
  const optionRoute = loginMode ? "register" : "login";

  const [email, setEmail] = useState("");
  const [customerId, setCustomerId] = useState("");

  const modalButtons = [
    {
      action: () => setMessage(""),
      text: "OK"
    }
  ];

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({
      email,
      id: customerId
    });
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
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" action="" method="post">
                <h3 className="text-center text-info">{pageText}</h3>
                <div className="form-group">
                  <label htmlFor="email" className="text-info">
                    Email:
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="form-control"
                    onChange={({ target: { value } }) => setEmail(value)}
                  />
                </div>

                {loginMode && (
                  <div className="form-group">
                    <label htmlFor="customer-id" className="text-info">
                      Customer ID:
                    </label>
                    <br />
                    <input
                      type="password"
                      name="customer-id"
                      id="customer-id"
                      value={customerId}
                      className="form-control"
                      onChange={({ target: { value } }) => setCustomerId(value)}
                    />
                  </div>
                )}

                <div className="bottom-row-auth">
                  <button
                    type="button"
                    className="btn login-button"
                    data-dismiss="modal"
                    onClick={handleSubmit}
                  >
                    {pageText}
                  </button>

                  <a href={`/${optionRoute}`} className="text-info">
                    {optionButtonText}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {message && (
        <Modal
          message={message}
          modalButtons={modalButtons}
          onClose={() => setMessage(null)}
          title="Success"
        />
      )}
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
