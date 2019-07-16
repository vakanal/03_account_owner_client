import React from "react";
import "./Navigation.css";
import { Col, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const navigation = props => {
  return (
    <Col md={12}>
      <Navbar collapseOnSelect bg="dark" variant="dark">
        <Navbar.Brand>
          <NavLink to={"/"} exact>
            Account-Owner
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <LinkContainer to={"/owner-list"} exact>
              <Nav.Link eventKey={1}>Owner Actions</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/account-list"}>
              <Nav.Link eventKey={2}>Account Actions</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default navigation;
