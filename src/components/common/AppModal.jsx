import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AppModal = props => {
  const { title, buttons, onClose, message, children, show } = props;

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{children ? children() : message}</Modal.Body>

        <Modal.Footer>
          {buttons?.map((button, index) => (
            <Button
              key={index}
              variant={button.color || "primary"}
              onClick={button.action}
            >
              {button.text}
            </Button>
          ))}
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

AppModal.propTypes = {
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
  show: PropTypes.bool,
  children: PropTypes.element
};

export default AppModal;
