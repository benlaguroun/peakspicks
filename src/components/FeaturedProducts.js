import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import './styles/FeaturedProducts.css';

const FeaturedProducts = () => {
  // This is just sample data. You'll later replace this with dynamic data from Printful API
  const products = [
    { id: 1, title: 'Adventure Backpack', image: '/path-to-image.jpg', price: '$99.99' },
    { id: 2, title: 'Mountain Jacket', image: '/path-to-image.jpg', price: '$129.99' },
    { id: 3, title: 'Hiking Boots', image: '/path-to-image.jpg', price: '$89.99' },
  ];

  return (
    <Container>
      <h2 className="text-center my-5">Featured Products</h2>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary">View Product</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProducts;
