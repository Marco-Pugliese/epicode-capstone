import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getArtistsAction } from "../Redux/Actions";

const AddAnArtist = () => {
  // const [id, setId] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [kindOf, setKindOf] = useState("");
  const [components, setComponents] = useState([]);
  // const [emailComponents, setEmailComponents] = useState([]);
  const [address, setAddress] = useState([]);
  // const allArtists = useSelector((state) => state.MyFetches.artists);
  const emailLogged = useSelector((state) => state.LoggedIn.user[0].email);
  const dispatch = useDispatch();

  const addArtist = () => {
    fetch(`http://localhost:3000/artists`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        kind_of: kindOf,
        genre: genre,
        _events: [],
        band_components: [components],
        registered_mails: [emailLogged],
        image_url: "https://placedog.net/300/300",
        address: address,
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
    <>
      <div className="text-center mt-2">
        <Button variant="primary" className="mb-2" onClick={handleShow}>
          Aggiungi la tua Pagina Artista
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi la tua Pagina</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
              <Form.Control
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Il tuo/vostro nome d'arte"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Kind of</InputGroup.Text>
              <Form.Control
                value={kindOf}
                onChange={(e) => {
                  setKindOf(e.target.value);
                }}
                placeholder="Es: Artista, Band, DJ..."
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Genre</InputGroup.Text>
              <Form.Control
                value={genre}
                onChange={(e) => {
                  setGenre(e.target.value);
                }}
                placeholder="Es: Pop,Rock,Rap..."
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Components</InputGroup.Text>
              <Form.Control
                value={components}
                onChange={(e) => {
                  setComponents(e.target.value);
                }}
                placeholder="Il nome dei singoli componenti"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
              <Form.Control
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                placeholder="Un indirizzo di riferimento (es: 'Città,Regione,Stato')"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addArtist();
              handleClose();
              dispatch(getArtistsAction());
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddAnArtist;
