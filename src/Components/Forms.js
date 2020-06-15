import React from 'react';
import {Form, Button} from 'react-bootstrap';

function Forms() {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="zipcode" placeholder="Zip Code" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Country ID</Form.Label>
                <Form.Control type="country" placeholder="us for United States" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Forms;