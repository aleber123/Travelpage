import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import Logotype from './Buttons/Logga';

 // useState för email
const LoginPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');
 


   // Funktion för att hantera ändringar i e-postadressen
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Funktion för att hantera knappen "Fortsätt"
  const handleContinue = () => {
    onClose();
  };


  const continueButtonStyle = {
    backgroundColor: 'rgb(245, 204, 14)',
    color: 'black',
    border: 'none',
  };

  const modalBodyStyle = {
    backgroundColor: '#F3F8F7', // Bakgrundsfärg
  };

  const headerBackgroundStyle = {
    backgroundColor: '#F3F8F7', // Bakgrundsfärg
  };

  return (
    <Modal show={true} centered onHide={onClose}>
      <Modal.Header closeButton style={headerBackgroundStyle}>
        <Row className="align-items-center">
          <Col>
            <div className="d-flex justify-content-center">
              <Modal.Title>Login</Modal.Title>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center">
              <Logotype /> {/* logga */}
            </div>
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body style={modalBodyStyle}>
        <Form>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <div className="d-flex flex-column">
            <Button
              variant="primary"
              onClick={handleContinue}
              className="mt-3 btn btn-lg btn-block mx-auto"
              style={continueButtonStyle}
            >
              Continue
            </Button>
          </div>
        </Form>
        <div className="text-center">
          <p className="mt-3 font-weight-bold fs-4">Or</p>
        </div>
        <div className="d-flex flex-column">
          <Button variant="danger" className="mb-2">
            <i className="bi bi-google mr-2"></i> Continue with Google
          </Button>
          <Button variant="primary" className="mb-2">
            <i className="bi bi-facebook mr-2"></i> Continue with Facebook
          </Button>
          <Button variant="dark">
            <i className="bi bi-apple mr-2"></i> Continue with Apple
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginPopup;
