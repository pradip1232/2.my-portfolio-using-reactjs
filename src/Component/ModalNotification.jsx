import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CheckCircle } from "react-bootstrap-icons";

const ModalNotification = () => {
  const [show, setShow] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");

    if (!hasSeenModal) {
      setShow(true);
      
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      const timer = setTimeout(() => {
        setShow(false);
        localStorage.setItem("hasSeenModal", "true");
      }, 5000);

      return () => {
        clearTimeout(timer);
        clearInterval(countdownInterval);
      };
    }
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      setShow(false);
    }
  }, [countdown]);

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
          <div
            style={{
              position: "absolute",
              top: 10,
              right: 20,
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "red",
            }}
          >
            {countdown}
          </div>
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
