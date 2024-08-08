import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './styles/Hero.css';

const Hero = () => {
  return (
    <div style={styles.heroSection}>
      <Container className="text-center">
        <h1>Welcome to Peakspicks</h1>
        <p>Your destination for outdoor and adventure gear</p>
        <Button variant="primary" size="lg">Shop Now</Button>
      </Container>
    </div>
  );
};

const styles = {
  heroSection: {
    backgroundImage: 'url(/images/hero-image.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '150px 0',
    color: 'white',
  }
};

export default Hero;
