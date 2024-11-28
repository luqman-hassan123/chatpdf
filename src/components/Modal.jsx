import React from "react";
import { Modal as BootstrapModal, Button } from "react-bootstrap"; // Correct import
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap styles

function Modal({ show, onHide, title, content }) {
  return (
    <BootstrapModal show={show} onHide={onHide} centered>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{content}</BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default Modal;