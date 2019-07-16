import React from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import { Col, Form, Row } from "react-bootstrap";
import "./Input.css";

const input = props => {
  let inputField = null;
  let errorMessage = null;

  if (props.invalid && props.shouldValidate && props.touched) {
    errorMessage = <em>{props.errorMessage}</em>;
  }

  switch (props.elementType) {
    case "input":
      inputField = (
        <Form.Group as={Row} controlId={props.id}>
          <Form.Label column sm={2}>
            {props.label}
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type={props.type}
              value={props.value}
              onChange={props.changed}
              onBlur={props.blur}
            />
          </Col>
          <Col>
            <em>{errorMessage}</em>
          </Col>
        </Form.Group>
      );
      break;
    default:
      inputField = null;
  }

  return <Aux>{inputField}</Aux>;
};

export default input;
