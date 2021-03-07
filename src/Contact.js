import React from "react";
import {Container, Form, Button} from 'react-bootstrap'

function Contact() {
  return (
    <Container>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
    
  );
}

export default Contact;
