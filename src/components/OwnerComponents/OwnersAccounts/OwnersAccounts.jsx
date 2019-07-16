import React from "react";
import { Row, Col, Table } from "react-bootstrap";
// import Moment from "react-moment";

const ownersAccounts = props => {
  function returnProps() {
    let account = props.accounts;
    if (account) {
      return (
        <tr key={account.alpha3Code}>
          <td>{account.demonym}</td>
          <td>{account.population}</td>
          <td>{account.area}</td>
        </tr>
      );
    }
  }

  return (
    <Row>
      <Col md={12}>
        <Table responsive striped>
          <thead>
            <tr>
              <th>Demonym</th>
              <th>Population</th>
              <th>Area</th>
            </tr>
          </thead>
          <tbody>{returnProps()}</tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default ownersAccounts;
