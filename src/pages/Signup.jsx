import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const Signup = () => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
    </Form>
  )
}

export default Signup