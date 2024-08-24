import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";
import ContactCategoryChart from "./ContactCategoryChart";

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const navigate = useNavigate();

  const handleSave = (formData) => {
    if (selectedContact) {
      setContacts(contacts.map((contact) =>
        contact === selectedContact ? formData : contact
      ));
    } else {
      setContacts([...contacts, formData]);
    }
    navigate("/");
    setSelectedContact(null);
  };

  const handleDelete = () => {
    if (!selectedContact) {
      alert("Please select a contact to delete");
      return;
    }
    setContacts(contacts.filter((contact) => contact !== selectedContact));
    setSelectedContact(null);
  };

  return (
    <Container>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Navbar.Brand href="/">MyPhoneBook App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button variant="primary" onClick={() => navigate("/contact-form")}>Add Contact</Button>
            <Button variant="secondary" onClick={() => navigate("/contact-form")} className="ms-2">Edit Contact</Button>
            <Button variant="danger" onClick={handleDelete} className="ms-2">Delete Contact</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row className="mb-4">
        <Col>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="contact-list" style={{ display: "flex", flexWrap: "wrap" }}>
                    {contacts.map((contact, index) => (
                      <ContactCard
                        key={index}
                        contact={contact}
                        onSelect={() => setSelectedContact(contact)}
                        onUpdate={() => navigate("/contact-form")}
                        isSelected={contact === selectedContact}
                      />
                    ))}
                  </div>
                  <Container className="mt-4">
                    <Row>
                      <Col>
                        <ContactCategoryChart contacts={contacts} />
                      </Col>
                    </Row>
                  </Container>
                </>
              }
            />
            <Route
              path="/contact-form"
              element={
                <ContactForm
                  selectedContact={selectedContact}
                  onSave={handleSave}
                  onCancel={() => navigate("/")}
                />
              }
            />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
