import React from "react";
import { useNavigate } from "react-router-dom";
import ContactCard from "./ContactCard";
import { Button, Container, Row, Col } from "react-bootstrap";

const ContactListPage = ({ contacts, setContacts, selectedContact, setSelectedContact }) => {
  const navigate = useNavigate();

  const handleAdd = () => {
    setSelectedContact(null);
    navigate("/contact-form");
  };

  const handleEdit = () => {
    if (!selectedContact) {
      alert("Please select a contact to edit");
      return;
    }
    navigate("/contact-form");
  };

  const handleDelete = () => {
    if (!selectedContact) {
      alert("Please select a contact to delete");
      return;
    }
    setContacts(contacts.filter(contact => contact !== selectedContact));
    setSelectedContact(null);
  };

  const handleSelect = (contact) => {
    setSelectedContact(contact);
  };

  const handleUpdateContact = (contact) => {
    setSelectedContact(contact);
    navigate("/contact-form");
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Button variant="primary" onClick={handleAdd}>Add Contact</Button>
          <Button variant="secondary" onClick={handleEdit} className="ms-2">Edit Contact</Button>
          <Button variant="danger" onClick={handleDelete} className="ms-2">Delete Contact</Button>
        </Col>
      </Row>
      <Row>
        {contacts.map((contact, index) => (
          <Col md={4} key={index} className="mb-3">
            <ContactCard
              contact={contact}
              onSelect={handleSelect}
              onUpdate={handleUpdateContact} // Make sure handleUpdateContact is passed here
              isSelected={contact === selectedContact}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ContactListPage;
