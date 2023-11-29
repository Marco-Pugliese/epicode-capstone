import { Button, Col, Container, Row } from "react-bootstrap";

const SingleEventHome = ({ event }) => {
  return (
    <Container className="py-1 fs-6 border">
      <Row className="d-flex">
        <Col className="col-9">
          <div className="fw-bold">
            {event.name_event} -{" "}
            <span className="smaller fw-normal">
              {event.date_event.slice(8, 10) +
                "/" +
                event.date_event.slice(5, 7) +
                "/" +
                event.date_event.slice(0, 4)}
            </span>
          </div>
          <div>
            {event.hosted_by.name_activity} -{" "}
            <span className="smaller">{event.hosted_by.address}</span>
          </div>
        </Col>
        <Col className="col d-flex justify-content-end align-items-center">
          <Button>
            <span className="smaller">Candidati Ora</span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default SingleEventHome;
