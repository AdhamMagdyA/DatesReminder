import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function ControlButtons({ onDelete, onShow }) {
  return (
    <Row className=" justify-content-center">
      <Col sm="8" className="d-flex justify-content-between m-2">
        <Button variant="primary" onClick={onDelete}>
          مسح الكل
        </Button>
        <Button variant="primary" onClick={onShow}>
          عرض البيانات{" "}
        </Button>
      </Col>
    </Row>
  );
}

export default ControlButtons;
