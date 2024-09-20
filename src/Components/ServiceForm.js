import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const ServiceForm = ({ addService, updateService, editingService, setEditingService }) => {
  const [service, setService] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    if (editingService) {
      setService(editingService);
    }
  }, [editingService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingService) {
      updateService(service);
      setEditingService(null);
    } else {
      addService({ ...service, id: Date.now() });
    }
    setService({ name: '', description: '', price: '' });
  };

  return (
    <Container className="my-4">
      <h3>{editingService ? 'Edit Service' : 'Add New Service'}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Service Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter service name"
            value={service.name}
            onChange={(e) => setService({ ...service, name: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            value={service.description}
            onChange={(e) => setService({ ...service, description: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            value={service.price}
            onChange={(e) => setService({ ...service, price: e.target.value })}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {editingService ? 'Update Service' : 'Add Service'}
        </Button>
      </Form>
    </Container>
  );
};

export default ServiceForm;
