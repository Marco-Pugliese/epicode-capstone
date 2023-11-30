import { Button, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCandidatureAction, getEventsAction } from "../Redux/Actions";
import { useState } from "react";
import { CheckCircle, Trash, XCircle } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";

const SingleEvent = ({ event }) => {
  const [show, setShow] = useState(false);
  const allCandidature = useSelector((state) => state.MyFetches.candidature);
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showCandidature, setShowCandidature] = useState(false);

  const handleShowCandidature = () => setShowCandidature(true);
  const handleCloseCandidature = () => setShowCandidature(false);
  const deleteSingleCandidatura = (id) => {
    fetch(`http://localhost:3000/candidature/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          console.log("Eliminato correttamente");
          dispatch(getCandidatureAction());
        } else {
          throw new Error("Errore nell'eliminazione dell'elemento");
        }
      })
      .catch((err) => console.error("ERRORE:", err));
  };
  const deleteElement = () => {
    fetch(`http://localhost:3000/events/${event.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          console.log("Eliminato correttamente");
          dispatch(getEventsAction);
        } else {
          throw new Error("Errore nell'eliminazione dell'elemento");
        }
      })
      .catch((err) => console.error("ERRORE:", err));
  };

  const renderBadge = () => {
    const candidatureCount = allCandidature.filter(
      (singleCandidatura) => singleCandidatura.event.hosted_by.id === id
    ).length;

    return candidatureCount > 0 ? (
      <div
        className="border border-warning ms-2 px-1 rounded"
        onClick={handleShowCandidature}
      >
        Candidature: {candidatureCount}
      </div>
    ) : null;
  };

  return (
    <Col className="d-flex justify-content-between ps-5 pe-1">
      <div>
        <div className="fw-bold">{event.name_event}</div>
        <div>{event.date_event}</div>
      </div>
      <div className="d-flex align-items-center">
        <Button className="py-0" variant="primary" onClick={handleShow}>
          <Trash />
        </Button>
        {renderBadge()}

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            Sei sicuro di voler Eliminare?
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Annulla
            </Button>
            <Button variant="primary" onClick={deleteElement}>
              Si
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={showCandidature}
          onHide={handleCloseCandidature}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>Elenco Candidature</Modal.Header>
          <Modal.Body>
            <Row>
              {allCandidature
                .filter(
                  (singleCandidatura) =>
                    singleCandidatura.event.hosted_by.id === id
                )
                .map((singleCandidatura) => (
                  <>
                    <Col key={singleCandidatura.id} className="col-10">
                      <Link
                        to={`/artist/${singleCandidatura.band.id}`}
                        className="nav-link"
                      >
                        <div className="fs-6 fw-bold">
                          {singleCandidatura.band.name}{" "}
                          <span className="extrasmall ms-3 fst-italic">
                            {singleCandidatura.band.kind_of} /{" "}
                            {singleCandidatura.band.genre}
                          </span>
                        </div>
                        <div className="smaller ">
                          {singleCandidatura.details}
                        </div>
                      </Link>
                    </Col>
                    <Col className="col-2 d-flex flex-column">
                      <Button className="smaller p-0">
                        <CheckCircle className="text-success" />
                      </Button>
                      <Button className="smaller p-0">
                        <XCircle
                          className="text-danger"
                          onClick={() =>
                            deleteSingleCandidatura(singleCandidatura.id)
                          }
                        />
                      </Button>
                    </Col>
                  </>
                ))}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseCandidature}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Col>
  );
};

export default SingleEvent;
