import { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getArtistsAction } from "../Redux/Actions";

const AddAnActivity = () => {
  const [id, setId] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [kindOf, setKindOf] = useState("");
  // const [components, setComponents] = useState([]);
  // const [emailComponents, setEmailComponents] = useState([]);
  const [address, setAddress] = useState([]);
  const allActivities = useSelector((state) => state.MyFetches.activities);
  const emailLogged = useSelector((state) => state.LoggedIn.user[0].email);
  const dispatch = useDispatch();
  const myLog = () => {
    if (allActivities.length > 0) {
      allActivities.map((singleUser) => {
        return singleUser.id > id ? setId(parseInt(singleUser.id) + 1) : null;
      });
    }
  };
  useEffect(() => {
    myLog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allActivities]);

  const addActivity = () => {
    fetch(`http://localhost:3000/activities`, {
      method: "POST",
      body: JSON.stringify({
        name_activity: name,
        name_owner: owner,
        kind_of_activity: kindOf,
        address: address,
        img: "https://www.placedog.net/300/200",
        registered_mails: [emailLogged],
        logo: `url_logo_${id}.jpg`,
        id: id,
        _events: [],
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
          Aggiungi la tua Pagina Attività
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
                placeholder="Il nome dell'attività"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                Tipo di attività
              </InputGroup.Text>
              <Form.Control
                value={kindOf}
                onChange={(e) => {
                  setKindOf(e.target.value);
                }}
                placeholder="Es: Bar, Pub, Disco..."
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Owner's Name</InputGroup.Text>
              <Form.Control
                value={owner}
                onChange={(e) => {
                  setOwner(e.target.value);
                }}
                placeholder="Il nome del titolare..."
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
                placeholder="Es: Via Firenze 1, Firenze, Toscana, Italia..."
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
              addActivity();
              setId(id + 1);
              dispatch(getArtistsAction());
              console.log(allActivities);
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddAnActivity;
