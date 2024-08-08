import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Peakspicks</h5>
            <p>Your go-to shop for all things adventure and outdoors.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <h5>Follow Us</h5>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2024 Peakspicks. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
