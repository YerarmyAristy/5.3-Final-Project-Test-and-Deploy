import React from "react";
import { Card, Button } from "react-bootstrap";

const ContactCard = ({ contact, onSelect, onUpdate, isSelected }) => {
  return (
    <Card className={`mb-3 ${isSelected ? 'border-primary' : ''}`}>
      <Card.Body>
        <Card.Title>
          {contact.fname} {contact.lname}
        </Card.Title>
        <Card.Text>
          <strong>Phone Number:</strong> {contact.phoneNumber} <br />
          <strong>Category:</strong> {contact.category}
        </Card.Text>
        <Button variant="info" onClick={() => onSelect(contact)}>Select</Button>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
