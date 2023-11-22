import { useEffect, useState } from "react";
import { Alert, Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logInAction } from "../Redux/Actions";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPasswordWrong, setIsPasswordWrong] = useState(false);
  const allUsers = useSelector((state) => state.MyFetches.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountLoggedIn, setAccountLoggedIn] = useState("");
  const logIn = () => {
    if (allUsers.length > 0) {
      if (
        allUsers.filter((user) => user.email === email) &&
        allUsers.filter((user) => user.password === password)
      ) {
        allUsers.map((user) =>
          user.email === email ? setAccountLoggedIn(user) : null
        );
      }
    }
  };
  useEffect(() => {
    logIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  return (
    <Col className="col-10 col-md-8 col-xl-5 bg-yellow rounded-4 shadow-lg py-3">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("password utente", accountLoggedIn.password);
          console.log("password scritta:", password);
          accountLoggedIn.id !== undefined &&
          accountLoggedIn.password === password
            ? dispatch(logInAction(accountLoggedIn))
            : setIsPasswordWrong(true);
          accountLoggedIn.id !== undefined &&
          accountLoggedIn.password === password
            ? navigate(`../account/${accountLoggedIn.id}`)
            : setIsPasswordWrong(true);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="shadow-sm"
            type="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="shadow-sm"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="light" className="text-dark shadow-sm" type="submit">
          Log-In
        </Button>
      </Form>
      {isPasswordWrong && (
        <div className="w-100 mt-3">
          <Alert variant="danger">
            Check your credentials, email or password could be wrong
          </Alert>
        </div>
      )}
    </Col>
  );
};
export default LogIn;
