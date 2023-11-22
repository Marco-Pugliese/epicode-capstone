import { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const SignUp = () => {
  const [id, setId] = useState(0);
  const allUsers = useSelector((state) => state.MyFetches.users);
  const myLog = () => {
    if (allUsers.length > 0) {
      allUsers.map((singleUser) => {
        return singleUser.id > id
          ? setId(parseInt(singleUser.id) + 1)
          : console.log("blueah");
      });
    }
  };
  useEffect(() => {
    myLog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allUsers]);
  return (
    <Col className="col-10 col-md-8 col-xl-5 bg-sand rounded-4 shadow-lg py-3 ">
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
          <Form.Control
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
            type="date"
            placeholder="Enter your birthday"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I accept the terms of use" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
};
export default SignUp;
