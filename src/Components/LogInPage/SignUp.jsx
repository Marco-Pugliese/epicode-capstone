import { useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getUsersAction, logInAction } from "../Redux/Actions";
import { useNavigate } from "react-router-dom";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";

const SignUp = () => {
  const navigate = useNavigate();
  const [newUserName, setNewUserName] = useState("");
  const [newUserSurname, setNewUserSurname] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState();
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserBirthDay, setNewUserBirthDay] = useState("");
  const onPlaceSelect = (value) => {
    setAddress(value);
    value && console.log(address);
    value && setCity(value.properties.city);
    value && setRegion(value.properties.state);
    value && setCountry(value.properties.country);
  };

  const onSuggectionChange = (value) => {
    // console.log(value);
  };
  const dispatch = useDispatch();

  const fetchPost = () => {
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      body: JSON.stringify({
        name: newUserName,
        surname: newUserSurname,
        email: newUserEmail,
        password: newUserPassword,
        city: city,
        region: region,
        country: country,
        birthday: newUserBirthDay,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("Utente registrato");
          let user = {
            name: newUserName,
            surname: newUserSurname,
            email: newUserEmail,
            password: newUserPassword,
            city: city,
            region: region,
            country: country,
            birthday: newUserBirthDay,
          };
          dispatch(logInAction(user));
          navigate(`../account/${user.id}`);
        } else {
          throw new Error("Error while registering new User");
        }
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <Col className="col-10 col-md-8 col-xl-5 bg-yellow rounded-4 shadow-lg py-3 px-2 ">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          fetchPost();
          dispatch(getUsersAction());
        }}
      >
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">Nome</InputGroup.Text>
          <Form.Control
            value={newUserName}
            onChange={(e) => {
              setNewUserName(e.target.value);
            }}
            required
            type="text"
            placeholder="Enter your name"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Cognome
          </InputGroup.Text>
          <Form.Control
            value={newUserSurname}
            onChange={(e) => {
              setNewUserSurname(e.target.value);
            }}
            required
            type="text"
            placeholder="Il tuo Cognome"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default" className="indirizzo">
            Indirizzo
          </InputGroup.Text>
          <GeoapifyContext apiKey="72ecfab76b604947a1887e342eca4698">
            <GeoapifyGeocoderAutocomplete
              required
              type={"locality"}
              lang={"it"}
              className="form-control geoinput"
              position={"it"}
              filterByCountryCode={["it"]}
              placeSelect={onPlaceSelect}
              suggestionsChange={onSuggectionChange}
              placeholder="Es: Città,Regione..."
              aria-describedby="basic-addon1"
            />
          </GeoapifyContext>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Data di Nascita
          </InputGroup.Text>
          <Form.Control
            value={newUserBirthDay}
            onChange={(e) => {
              setNewUserBirthDay(e.target.value);
            }}
            required
            type="date"
            placeholder="Enter your birthday"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={newUserEmail}
            required
            onChange={(e) => {
              setNewUserEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            value={newUserPassword}
            onChange={(e) => {
              setNewUserPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Ho preso visione ed accetto i termini di utilizzo"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Desidero ricevere aggiornamenti, offerte e sconti di Bardoo"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign-In
        </Button>
      </Form>
    </Col>
  );
};
export default SignUp;
