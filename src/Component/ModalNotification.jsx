// src/components/ModalNotification.jsx
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalNotification = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenModal');

    if (!hasSeenModal) {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
        localStorage.setItem('hasSeenModal', 'true');
      }, 3000);

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
          <h5>Currently, I am working on this website</h5>
          <Button variant="primary" onClick={() => setShow(false)}>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalNotification;
