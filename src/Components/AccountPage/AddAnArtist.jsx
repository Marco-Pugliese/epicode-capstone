import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getArtistsAction } from "../Redux/Actions";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";

const AddAnArtist = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [genre, setGenre] = useState("");
  const [kindOf, setKindOf] = useState("");
  const [description, setDescription] = useState("");
  const [components, setComponents] = useState([]);
  const [address, setAddress] = useState([]);
  const emailLogged = useSelector((state) => state.LoggedIn.user[0].email);
  const onPlaceSelect = (value) => {
    setAddress(value.properties);
    console.log(address);
  };

  const onSuggectionChange = (value) => {
    console.log(value);
  };

  const dispatch = useDispatch();
  const addArtist = () => {
    fetch(`http://localhost:3000/artists`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        kind_of: kindOf,
        genre: genre,
        phone: phone,
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
              <InputGroup.Text id="basic-addon1">Nome</InputGroup.Text>
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
              <InputGroup.Text id="basic-addon1">
                Tipo di Artista
              </InputGroup.Text>
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
              <InputGroup.Text id="basic-addon1">
                Genere Musicale
              </InputGroup.Text>
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
              <InputGroup.Text id="basic-addon1">Descrizione</InputGroup.Text>
              <Form.Control
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Una breve descrizione da inserire nella pagina..."
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Componenti</InputGroup.Text>
              <Form.Control
                value={components}
                onChange={(e) => {
                  setComponents(e.target.value);
                }}
                placeholder="Es: Marco Rossi, Luca Bianchi, Michela Verdi"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                Numero Telefonico
              </InputGroup.Text>
              <Form.Control
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="number"
                placeholder="Es: +0123 456789"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Indirizzo</InputGroup.Text>
              <GeoapifyContext apiKey="72ecfab76b604947a1887e342eca4698">
                <GeoapifyGeocoderAutocomplete
                  type={"locality"}
                  lang={"it"}
                  className="form-control"
                  position={"it"}
                  filterByCountryCode={["it"]}
                  placeSelect={onPlaceSelect}
                  suggestionsChange={onSuggectionChange}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  placeholder="Es: Città,Regione..."
                  aria-describedby="basic-addon1"
                />
              </GeoapifyContext>
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addArtist();
              handleClose();
              dispatch(getArtistsAction());
            }}
          >
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddAnArtist;
