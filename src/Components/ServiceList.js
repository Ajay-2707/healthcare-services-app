import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const ServiceList = ({ services, deleteService, editService }) => {
  return (
    <Container>
      <h3>Available Services</h3>
      {services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        <Row className="my-4">
          {services.map((service) => (
            <Col sm={12} md={6} lg={4} key={service.id} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Card.Text>
                    <strong>Price: ${service.price}</strong>
                  </Card.Text>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => editService(service)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteService(service.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ServiceList;
