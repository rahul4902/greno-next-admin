"use client";

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import withHeader from "../../hoc/withHeader";
import "./contactUs.css";
import { Mail, MapPinHouse, PhoneCall } from "lucide-react";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
  };

  return (
    <Container className="my-5 contact-page">
      <div
        className="card p-4 shadow-sm rounded-3"
        style={{ backgroundColor: "rgb(242 242 242 / 57%)" }}
      >
        <Row className="gx-5">
          <Col md={7}>
            <h2>Contact Us</h2>
            <p>
              We&apos;d love to hear from you! Please fill out the form below to get
              in touch.
            </p>
            <Form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Mobile no.</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your mobile num..."
                      required
                    />
                  </Form.Group>
                </div>
                <div className="col-md-12">
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>
                </div>
                <div className="col-md-12">
                  <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Enter your message"
                      required
                    />
                  </Form.Group>
                </div>
              </div>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={5} className="mt-4 mt-md-0">
            <h2>Our Contact Details</h2>
            <p className="d-flex align-items-center card flex-row py-2 px-3">
              <Mail size={18} />
              <strong className="ms-2">Email:</strong> mailto:info@example.com
            </p>
            <p className="d-flex align-items-center card flex-row py-2 px-3">
              <PhoneCall size={18} />
              <strong className="ms-2">Phone:</strong> +91 9716164902
            </p>
            <p className="d-flex align-items-center card flex-row py-2 px-3">
              <MapPinHouse size={18} />
              <strong className="ms-2">Address:</strong> Noida,Uttar
              Pradesh,201306
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default withHeader(ContactUs);
