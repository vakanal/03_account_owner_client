import React, { Component } from "react";
import { Form, Card, Button, Col, Row } from "react-bootstrap";
import { returnInputConfiguration } from "../../../Utility/InputConfiguration";
import * as formUtilityActions from "../../../Utility/FormUtility";
import Input from "../../../UI/Inputs/Input";

class UpdateOwner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerForm: returnInputConfiguration(),
      isFormValid: true
    };
  }

  handleChangeEvent = (event, id) => {
    const updatedOwnerForm = { ...this.state.ownerForm };
    updatedOwnerForm[id] = formUtilityActions.executeValidationAndReturnFormElement(
      event,
      updatedOwnerForm,
      id
    );

    const counter = formUtilityActions.countInvalidElements(updatedOwnerForm);

    this.setState({ ownerForm: updatedOwnerForm, isFormValid: counter === 0 });
  };

  render() {
    const formElementsArray = formUtilityActions.convertStateToArrayOfFormObjects(
      { ...this.state.ownerForm }
    );
    return (
      <Card>
        <Card.Body>
          <Form onSubmit={this.updateOwner}>
            {formElementsArray.map(element => {
              return (
                <Input
                  key={element.id}
                  elementType={element.config.element}
                  id={element.id}
                  label={element.config.label}
                  type={element.config.type}
                  value={element.config.value}
                  changed={event => this.handleChangeEvent(event, element.id)}
                  errorMessage={element.config.errorMessage}
                  invalid={!element.config.valid}
                  shouldValidate={element.config.validation}
                  touched={element.config.touched}
                  blur={event => this.handleChangeEvent(event, element.id)}
                />
              );
            })}
            <br />
            <Form.Group as={Row}>
              <Col md={{ offset: 6, span: 1 }}>
                <Button
                  type="submit"
                  variant="info"
                  disabled={!this.state.isFormValid}
                >
                  Update
                </Button>
              </Col>
              <Col md={1}>
                <Button variant="danger" onClick={this.redirectToOwnerList}>
                  Cancel
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default UpdateOwner;
