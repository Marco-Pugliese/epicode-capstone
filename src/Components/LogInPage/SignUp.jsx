import { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction, logInAction } from "../Redux/Actions";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const [newUserName, setNewUserName] = useState("");
  const [newUserSurname, setNewUserSurname] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserBirthDay, setNewUserBirthDay] = useState("");
  const allUsers = useSelector((state) => state.MyFetches.users);
  const dispatch = useDispatch();
  const myLog = () => {
    if (allUsers.length > 0) {
      allUsers.map((singleUser) => {
        return singleUser.id > id ? setId(parseInt(singleUser.id) + 1) : null;
      });
    }
  };
  const fetchPost = () => {
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      body: JSON.stringify({
        name: newUserName,
        surname: newUserSurname,
        email: newUserEmail,
        password: newUserPassword,
        id: id,
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
            id: id,
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

  useEffect(() => {
    myLog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allUsers]);
  return (
    <Col className="col-10 col-md-8 col-xl-5 bg-sand rounded-4 shadow-lg py-3 ">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          fetchPost();
          dispatch(getUsersAction());
          setId(id + 1);
          //   dispatch(logInAction(user));
          // navigate(`../account/${user.id}`);
        }}
      >
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
          <Form.Control
            value={newUserName}
            onChange={(e) => {
              setNewUserName(e.target.value);
            }}
            type="text"
            placeholder="Enter your name"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Surname
          </InputGroup.Text>
          <Form.Control
            value={newUserSurname}
            onChange={(e) => {
              setNewUserSurname(e.target.value);
            }}
            type="text"
            placeholder="Enter your surname"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Birthday
          </InputGroup.Text>
          <Form.Control
            value={newUserBirthDay}
            onChange={(e) => {
              setNewUserBirthDay(e.target.value);
            }}
            type="date"
            placeholder="Enter your birthday"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={newUserEmail}
            onChange={(e) => {
              setNewUserEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
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
            label="I accept the terms of use"
            required
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
