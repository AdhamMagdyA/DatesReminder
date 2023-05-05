import React from "react";
import { Col, Row } from "react-bootstrap";

function PeopleWindow({ people }) {
  return (
    <Row className=" justify-content-center">
      <Col sm="8">
        <div className="window">
          {people.length ? (
            people.map((person) => {
              return (
                <div key={person.id} className="d-flex m-2 border-bottom">
                  <img className="avatar m-1" src={person.img} alt="profile" />
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
  );
}

export default PeopleWindow;
