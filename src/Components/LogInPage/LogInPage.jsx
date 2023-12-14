import { useState } from "react";
import { Container, Row } from "react-bootstrap";

import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Spinner from "../Spinner/Spinner";

const LogInPage = () => {
  const [registered, setRegistered] = useState(true);
  const [show, setShow] = useState(true);
  const hideSpinner = () => {
    setTimeout(() => setShow(false), 1000);
  };
  return (
    <div id="loginPage">
      {hideSpinner()}
      {show === true ? (
        <Spinner />
      ) : (
        <Container fluid className="h-100 ">
          <Row className="h-100 justify-content-center align-items-center">
            <div className="d-flex justify-content-center flex-column align-items-center">
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
            </div>
          </Row>
        </Container>
      )}
    </div>
  );
};
export default LogInPage;
