import { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import {
  ClockFill,
  EnvelopeFill,
  PinMapFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const ModalEvent = ({ singleEvent, eventsPage }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="fw-bold pointer" onClick={handleShow}>
        {singleEvent.name_event} -{" "}
        <span className="extrasmall fw-normal">
          {singleEvent.date_event.slice(8, 10)}/
          {singleEvent.date_event.slice(5, 7)}/
          {singleEvent.date_event.slice(0, 4)}
        </span>{" "}
        {eventsPage && (
          <span className="extrasmall fw-normal">
            - {singleEvent.hosted_by.city}
          </span>
        )}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">
            {singleEvent.name_event}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              <Col className="d-flex justify-content-center">
                <Link
                  to={`/artist/${singleEvent.band.id}`}
                  className="nav-link"
                  onClick={handleClose}
                >
                  <span className="fw-bold fst-italic">
                    {singleEvent.band.name}{" "}
                  </span>
                </Link>
                <span className="px-2">X</span>
                <Link
                  to={`/activity/${singleEvent.hosted_by.id}`}
                  className="nav-link"
                >
                  <span className="fw-bold fst-italic">
                    {singleEvent.hosted_by.name_activity}
                  </span>
                </Link>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="text-center">
                <span className="extrasmall fw-normal">
                  {singleEvent.date_event.slice(8, 10)}/
                  {singleEvent.date_event.slice(5, 7)}/
                  {singleEvent.date_event.slice(0, 4)}
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                Dettagli evento:
                <span className="fw-bold mx-1">{singleEvent.detail}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <ClockFill /> :
                <span className="fw-bold mx-1">
                  {singleEvent.date_event.slice(11)}
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <PinMapFill /> :
                <span className="fw-bold mx-1">
                  {singleEvent.hosted_by.city}
                </span>
                -
                <span className="mx-1 smaller">
                  {singleEvent.hosted_by.strada}, {singleEvent.hosted_by.civico}
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <EnvelopeFill /> :
                <span className="mx-1">{singleEvent.hosted_by.email}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <TelephoneFill /> :
                <span className=" mx-1">{singleEvent.hosted_by.phone}</span>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalEvent;
