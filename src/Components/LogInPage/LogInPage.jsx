import { useState } from "react";
import { Container, Row } from "react-bootstrap";

import LogIn from "./LogIn";
import SignUp from "./SignUp";

const LogInPage = () => {
  const [registered, setRegistered] = useState(true);
  return (
    <Container fluid className="bg-blueLight py-5 h-100 ">
      <Row className="justify-content-center">
        <div
          className="d-flex justify-content-center pt-4 pb-2 "
          onClick={() => {
            setRegistered(!registered);
          }}
        >
          {registered === true ? (
            <div className="loginsignin px-1 text-center">
              Don't have an account?
            </div>
          ) : (
            <div className="loginsignin px-1 text-center">
              Already have an account?
            </div>
          )}
        </div>

        {registered === true ? <LogIn /> : <SignUp />}
      </Row>
    </Container>
  );
};
export default LogInPage;
