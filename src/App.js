import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
  const people = [
    {
      name: "محمد عبد الله",
      time: "الخامسة",
      img: "pp.png",
    },
    {
      name: "احمد مصطفى",
      time: "الرابعة",
      img: "pp.png",
    },
    {
      name: "سعد كامل",
      time: "الثالثة",
      img: "pp.png",
    },
  ];

  return (
    <div className="App font">
      <Container className="py-5 justify-content-center">
        <Row className="justify-content-center">
          <Col sm="8">لديك {people.length} مواعيد</Col>
        </Row>
        <Row className=" justify-content-center">
          <Col sm="8">
            <div className="window">
              {people.length ? (
                people.map((person) => {
                  return (
                    <div className="d-flex m-2 border-bottom">
                      <img className="avatar m-1" src={person.img} />
                      <div className="mt-1">
                        <p className="fs-5 d-inline">{person.name}</p>
                        <p className="fs-6">{person.time}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="empty">لا يوجد مواعيد</div>
              )}
            </div>
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
