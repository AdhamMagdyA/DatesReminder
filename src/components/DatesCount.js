import React from "react";
import { Col, Row } from "react-bootstrap";

function DatesCount({ people }) {
  return (
    <Row className="justify-content-center">
      <Col sm="8">لديك {people.length} مواعيد</Col>
    </Row>
  );
}

export default DatesCount;
