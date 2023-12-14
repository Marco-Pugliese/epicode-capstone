import { useState } from "react";
import {
  Button,
  Col,
  Collapse,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import {
  ArrowDownCircleFill,
  ArrowUpCircleFill,
  Envelope,
  Telephone,
} from "react-bootstrap-icons";
import Spinner from "../Spinner/Spinner";

const ContactsPage = () => {
  const [name, setName] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [testo, setTesto] = useState("");
  const [open, setOpen] = useState(false);
  const clearInput = () => {
    setCognome("");
    setName("");
    setEmail("");
    setTesto("");
  };
  const sendEmail = () => {
    console.log("email inviata");
    clearInput();
  };
  const [show, setShow] = useState(true);
  const hideSpinner = () => {
    setTimeout(() => setShow(false), 1000);
  };
  return (
    <Container
      fluid
      id="contactsPage"
      className="d-flex pt-2 flex-column justify-content-between align-items-center text-white"
    >
      {hideSpinner()}
      {show === true ? (
        <Spinner />
      ) : (
        <>
          <Container>
            <Row className="align-items-center ">
              <Col className="col-2 ">
                <img
                  src="https://placedog.net/1200/1200"
                  alt=""
                  style={{ width: "100px" }}
                />
              </Col>
              <Col className="text-yellow fw-bolder blur">
                Qualsiasi cosa tu abbia da dire il nostro Team Bardoo ti
                ascolterà
              </Col>
            </Row>
            <Row>
              <Col className="offset-2">
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendEmail();
                  }}
                >
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Nome</InputGroup.Text>
                    <Form.Control
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      placeholder="Il tuo nome"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Cognome</InputGroup.Text>
                    <Form.Control
                      required
                      value={cognome}
                      onChange={(e) => {
                        setCognome(e.target.value);
                      }}
                      placeholder="Il tuo cognome"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                    <Form.Control
                      required
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="La tua email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      Dicci tutto:{" "}
                    </InputGroup.Text>
                    <Form.Control
                      required
                      value={testo}
                      onChange={(e) => {
                        setTesto(e.target.value);
                      }}
                      placeholder="..."
                      aria-describedby="basic-addon1"
                      as="textarea"
                    />
                  </InputGroup>
                  <Button type="button" onClick={clearInput}>
                    Cancella
                  </Button>
                  <Button type="submit">Invia</Button>
                </Form>
              </Col>
            </Row>
          </Container>
          <Container className="text-center w-50 bg-bluedark rounded-top-4">
            {open === true ? (
              <div
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="pointer my-2"
              >
                <ArrowDownCircleFill />
              </div>
            ) : (
              <div
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="pointer"
              >
                <ArrowUpCircleFill />
              </div>
            )}
            <Collapse in={open}>
              <div>
                <div>
                  <Envelope className="text-yellow me-2" /> bardoo@info.com
                </div>
                <div>
                  <Telephone className="text-yellow me-2" /> +012 3456789
                </div>
              </div>
            </Collapse>
          </Container>
        </>
      )}
    </Container>
  );
};
export default ContactsPage;
