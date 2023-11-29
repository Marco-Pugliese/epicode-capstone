import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import ArtistActivityContent from "./ArtistActivityContent";
import { Link, useNavigate } from "react-router-dom";
import SearchHeroSection from "../LandingPage/HeroSection/SearchHeroSection";
import BlogSection from "../LandingPage/HeroSection/BlogSection";
import EventiInProgramma from "./EventiInProgramma";
import AllArtists from "./AllArtists";

const AccountPage = () => {
  const user = useSelector((state) => state.LoggedIn);
  const [isArtist, setIsArtist] = useState(true);
  const navigate = useNavigate();
  const navigateToLogIn = () => {
    navigate("/login");
  };
  const goToLogIn = () => {
    setTimeout(navigateToLogIn, 3500);
  };
  const [isProfile, setIsProfile] = useState(true);
  return (
    <Container id="accountPage" fluid className="h-100">
      {user.isLogged === true ? (
        <>
          <Row className="justify-content-center">
            <Col className="col-12 bg-bluedark">
              <div className="text-white">
                {user.isLogged === true ? (
                  <div className="d-flex align-items-center">
                    <Col className="col-10">
                      <div
                        onClick={() => {
                          setIsProfile(false);
                        }}
                        className="text-end fw-bold rounded-top-3 pointer ms-1 text-white"
                      >
                        Crea/Gestisci Profili
                      </div>
                    </Col>
                    <Col>
                      <WelcomeMessage user={user.user} />
                    </Col>
                  </div>
                ) : null}
              </div>
            </Col>
          </Row>

          <Row className="h-100 justify-content-center pt-5 py-5">
            <Col className=" col-10  d-flex justify-content-around p-0 m-0">
              {isProfile === true ? (
                <div className="d-flex flex-column">
                  <Row>
                    <Col className="text-center fw-bold w-100 rounded-top-3 me-1  text-white">
                      <div
                        onClick={() => {
                          setIsArtist(true);
                        }}
                        className={
                          isArtist === true
                            ? "fw-bold fs-1 text-yellow pointer titleHover"
                            : "fs-1 pointer titleHover"
                        }
                      >
                        Navigazione Artista
                      </div>
                      <div
                        onClick={() => {
                          setIsArtist(true);
                        }}
                      >
                        {isArtist === true ? (
                          <img
                            src="/assets/images/details&logo/freccia-giu-bianca.png"
                            alt="freccia bianca"
                            className="pointer"
                          />
                        ) : null}
                      </div>
                    </Col>
                    <Col className="text-center fw-bold w-100 rounded-top-3 me-1 text-white  ">
                      <div
                        onClick={() => {
                          setIsArtist(false);
                        }}
                        className={
                          isArtist === false
                            ? "fw-bold fs-1 text-yellow pointer titleHover"
                            : "fs-1 pointer titleHover"
                        }
                      >
                        Navigazione Attività
                      </div>
                      <div
                        onClick={() => {
                          setIsArtist(false);
                        }}
                      >
                        {isArtist === false ? (
                          <img
                            src="/assets/images/details&logo/freccia-giu-bianca.png"
                            alt="freccia bianca"
                            className="pointer"
                          />
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                  {isArtist === true ? <EventiInProgramma /> : <AllArtists />}

                  <SearchHeroSection />
                  {/* <SubHeroSection /> */}
                  <BlogSection />
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
