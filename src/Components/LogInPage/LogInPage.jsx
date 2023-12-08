import { useState } from "react";
import { Container, Row } from "react-bootstrap";

import LogIn from "./LogIn";
import SignUp from "./SignUp";

const LogInPage = () => {
  const [registered, setRegistered] = useState(true);
  return (
    <Container id="loginPage" fluid className=" py-5 h-100 ">
      <Row className="justify-content-center">
        <div className="d-flex justify-content-center pt-4 pb-2 ">
          {registered === true ? (
            <div
              className="loginsignin px-1 text-center text-white"
              onClick={() => {
                setRegistered(!registered);
              }}
            >
              Non hai un account? Registrati ora!
            </div>
          ) : (
            <div
              className="loginsignin px-1 text-center text-white"
              onClick={() => {
                setRegistered(!registered);
              }}
            >
              Hai già un account? Accedi ora!
            </div>
          )}
        </div>

        {registered === true ? <LogIn /> : <SignUp />}
      </Row>
    </Container>
  );
};
export default LogInPage;
