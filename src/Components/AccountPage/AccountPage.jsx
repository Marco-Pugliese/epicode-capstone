import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";

import HeroSection from "../LandingPage/HeroSection/HeroSection";
import AsideSection from "../LandingPage/AsideSection/AsideSection";
import ArtistActivityContent from "./ArtistActivityContent";
import { Link, useNavigate } from "react-router-dom";

const AccountPage = () => {
  const user = useSelector((state) => state.LoggedIn);
  const navigate = useNavigate();
  const navigateToLogIn = () => {
    navigate("/login");
  };
  const goToLogIn = () => {
    setTimeout(navigateToLogIn, 3500);
  };
  const [isProfile, setIsProfile] = useState(true);
  return (
    <Container fluid className="bg-blue h-100">
      {user.isLogged === true ? (
        <>
          <Row className="justify-content-center">
            <Col className="col-12">
              <div className="bg-blue text-yellow ">
                {user.isLogged === true ? (
                  <WelcomeMessage user={user.user} />
                ) : null}
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center bg-blue">
            <Col className="rounded-3 col-10 d-flex justify-content-around p-0 m-0">
              <div
                onClick={() => {
                  setIsProfile(true);
                }}
                className="text-center fw-bold py-2 w-100 rounded-top-3 shadow-lg pointer me-1 bg-blue text-yellow"
              >
                User
              </div>
              <div
                onClick={() => {
                  setIsProfile(false);
                }}
                className="text-center fw-bold py-2 w-100 rounded-top-3 shadow-lg pointer ms-1 bg-sand text-blue"
              >
                Artist/Activity
              </div>
            </Col>
          </Row>
          <Row className="h-100 justify-content-center">
            <Col className=" col-10 bg-sand d-flex justify-content-around p-0 m-0">
              {isProfile === true ? (
                <div className="d-flex flex-column">
                  <HeroSection noLogOut={true} />
                  <AsideSection />
                </div>
              ) : (
                <ArtistActivityContent />
              )}
            </Col>
          </Row>
        </>
      ) : (
        <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
          <div className="text-yellow">
            Log-in if you want to see this page. You will be redirected to
            log-in page in few seconds.
          </div>
          <div>
            <Link to="/login" className="nav-link ">
              <div className="text-yellow">
                <span className="text-blueLight"> Click here </span>
                in case the page is not redirected automatically
              </div>
            </Link>
          </div>
          {goToLogIn()}
        </Container>
      )}
    </Container>
  );
};
export default AccountPage;
