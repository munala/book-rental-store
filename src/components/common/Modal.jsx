import React from "react";
import PropTypes from "prop-types";

const Modal = props => {
  const { title, buttons, onClose, message, children } = props;

  return (
    <div
      className="modal fade"
      id="app-modal"
      tabIndex="-1"
      aria-labelledby="app-modal-label"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="app-modal-label">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">{children ? children() : message}</div>

          <div className="modal-footer">
            {buttons?.map((button, index) => (
              <button
                key={index}
                type="button"
                className={`btn btn-${button.color || "primary"}`}
                data-dismiss="modal"
                onClick={button.action}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      action: PropTypes.func.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element
};

export default Modal;
