import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";

const SingleEventHome = ({ event }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [candidatura, setCandidatura] = useState(true);

  const allTheArtists = useSelector((state) => state.MyFetches.artists);
  const userLogged = useSelector((state) => state.LoggedIn.user[0]);
  const emailLogged = userLogged.email;

  const [bandName, setBandName] = useState("");
  const [band, setBand] = useState("");
  const [details, setDetails] = useState("");

  const getArtist = () => {
    allTheArtists.forEach((singleArtist) => {
      if (singleArtist.name === bandName) {
        setBand(singleArtist);
      }
    });
  };

  useEffect(() => {
    getArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bandName]);

  const addCandidatura = () => {
    fetch(`http://localhost:3000/candidature`, {
      method: "POST",
      body: JSON.stringify({
        band: band,
        event: event,
        details: details,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("Candidatura Effettuata");
        } else {
          throw new Error("Error while registering new Artist");
        }
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <Container className="py-1 fs-6 border rounded shadow">
      <Row className="d-flex ">
        <Col className="col-9 ">
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
        <Col className="col d-flex justify-content-end align-items-center ">
          {candidatura === true ? (
            <Button onClick={handleShow}>
              (<span className="smaller">Candidati Ora</span>)
            </Button>
          ) : null}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Candidati Ora!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Dettagli</InputGroup.Text>
                  <Form.Control
                    value={details}
                    onChange={(e) => {
                      setDetails(e.target.value);
                    }}
                    placeholder="Es: Cachet, Necessità"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setBandName(e.target.value)}
                  >
                    <option>
                      Seleziona con quale pagina-artista vuoi candidarti
                    </option>
                    {allTheArtists.length > 0 && allTheArtists !== undefined
                      ? allTheArtists.map((artist) =>
                          artist.registered_mails.map((singleEmail) =>
                            singleEmail === emailLogged ? (
                              <option key={artist}>
                                {artist.name}
                                {console.log(band)}
                              </option>
                            ) : (
                              () => null
                            )
                          )
                        )
                      : null}
                  </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Evento</InputGroup.Text>
                  <Form.Control
                    value={`${
                      event.name_event + " - " + event.hosted_by.name_activity
                    }`}
                    disabled
                  />
                </InputGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleClose()}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  addCandidatura();
                  handleClose();
                  setCandidatura(false);
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleEventHome;
