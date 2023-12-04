import { Col, Container, Row } from "react-bootstrap";

const ContactsPage = () => {
  return (
    <Container fluid id="contactsPage" className="d-flex align-items-center">
      <Container>
        <Row className="align-items-center ">
          <Col className="col-4 ">
            <img
              src="https://placedog.net/1200/1200"
              alt=""
              className="w-100"
            />
          </Col>
          <Col className="col-8">FORM CONTATTACI</Col>
        </Row>
      </Container>
    </Container>
  );
};
export default ContactsPage;
