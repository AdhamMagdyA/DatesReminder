import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App font">
      <Container className="py-5 justify-content-center">
        <Row className="justify-content-center">
          <Col sm="8">لديك 6 مواعيد</Col>
        </Row>
        <Row className=" justify-content-center">
          <Col sm="8">
            <div className="window"></div>
          </Col>
        </Row>
        <Row className=" justify-content-center">
          <Col sm="8" className="d-flex justify-content-between m-2">
            <Button variant="primary">مسح الكل</Button>
            <Button variant="primary">عرض البيانات </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
