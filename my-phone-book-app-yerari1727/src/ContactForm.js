import React, { useState, useEffect } from "react";

import { Form, Button, Container, Row, Col } from "react-bootstrap";

const ContactForm = ({ selectedContact, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    fname: "",

    lname: "",

    phoneNumber: "",

    category: ""
  });

  useEffect(() => {
    if (selectedContact) {
      setFormData(selectedContact);
    }
  }, [selectedContact]);

  const handleChange = e => {
    const { name, value } = e.target;

    const sanitizedValue = value.replace(/[^a-zA-Z0-9 ]/g, "");

    setFormData({ ...formData, [name]: sanitizedValue });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSave(formData);

    setFormData({ fname: "", lname: "", phoneNumber: "", category: "" });
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formPhoneNumber" className="mt-3">
              <Form.Label>Phone Number</Form.Label>

              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formCategory" className="mt-3">
              <Form.Label>Category</Form.Label>

              <Form.Control
                as="select"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>

                <option value="Family">Family</option>

                <option value="Friends">Friends</option>

                <option value="Work">Work</option>

                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Button variant="primary" type="submit">
              Save
            </Button>

            <Button variant="secondary" onClick={onCancel} className="ms-2">
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactForm;
