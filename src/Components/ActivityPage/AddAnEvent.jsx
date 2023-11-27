import { useEffect, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AddAnEvent = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [eventId, setEventId] = useState(0);
  const allEvents = useSelector((state) => state.MyFetches.events);
  const myLog = () => {
    if (allEvents.length > 0) {
      allEvents.map((singleEvent) => {
        return singleEvent.id > eventId
          ? setEventId(parseInt(singleEvent.id) + 1)
          : null;
      });
    }
  };
  const [activity, setActivity] = useState();
  const myActivity = () => {
    if (allActivity !== undefined && allActivity.length > 0) {
      allActivity.map((singleActivity) =>
        singleActivity.id === id ? setActivity(singleActivity) : null
      );
    }
  };

  const allActivity = useSelector((state) => state.MyFetches.activities);

  useEffect(() => {
    myLog();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allEvents]);
  useEffect(() => {
    myActivity();
    console.log(activity);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activity]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");
  const [richiesta, setRichiesta] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addEvent = () => {
    fetch(`http://localhost:3000/events`, {
      method: "POST",
      body: JSON.stringify({
        // name: name,
        // kind_of: kindOf,
        // genre: genre,
        // _events: [],
        // band_components: [components],
        // registered_mails: [emailLogged],
        // image_url: "https://placedog.net/300/300",
        // address: address,
        // id: id,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("Utente registrato");
        } else {
          throw new Error("Error while registering new Artist");
        }
      })
      .catch((err) => console.log("Error: ", err));
  };
  return (
    <div className="mt-2 pointer">
      <div>
        <Button className="mb-2" onClick={handleShow}>
          Aggiungi un Evento!
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi il tuo Evento!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Nome Evento</InputGroup.Text>
              <Form.Control
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Il nome dell'evento"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Data Evento</InputGroup.Text>
              <Form.Control
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                placeholder="Scegli la data dell'evento"
                aria-describedby="basic-addon1"
                type="datetime-local"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                Dettagli Evento
              </InputGroup.Text>
              <Form.Control
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value);
                }}
                placeholder="I dettagli dell'evento"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Richieste</InputGroup.Text>
              <Form.Control
                value={richiesta}
                onChange={(e) => {
                  setRichiesta(e.target.value);
                }}
                placeholder="Es: Siamo in cerca di una 'Folk Band', 'DJ', ecc. "
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {}}>
            Pubblica Evento!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default AddAnEvent;
