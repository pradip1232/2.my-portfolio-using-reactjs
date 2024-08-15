// src/components/ModalNotification.jsx
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CheckCircle } from "react-bootstrap-icons";

const ModalNotification = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");

    if (!hasSeenModal) {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
        localStorage.setItem("hasSeenModal", "true");
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Body>
        <div className="text-center">
          <CheckCircle size={40} color="green" />
          <h5>Currently, I am working on this website</h5>
          <h6>Thank You For Visiting!!</h6>
          <Button variant="primary" onClick={() => setShow(false)}>
            Close
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalNotification;
