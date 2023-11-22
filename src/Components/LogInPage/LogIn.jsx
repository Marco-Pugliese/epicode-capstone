import { Button, Col, Form } from "react-bootstrap";

const LogIn = () => {
  return (
    <Col className="col-10 col-md-8 col-xl-5 bg-yellow rounded-4 shadow-lg py-3">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log-In
        </Button>
      </Form>
    </Col>
  );
};
export default LogIn;
