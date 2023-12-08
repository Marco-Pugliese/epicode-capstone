import { Col, Container, Row } from "react-bootstrap";

import MainAside from "../AsideSection/MainAside";

const SubHeroSection = () => {
  return (
    <Container className="text-white pt-5 my-5 sepied">
      <Row className="pt-5 my-5">
        <Col className="col-6 col-xl-4">
          <img
            src="/assets/images/general/musiclive.avif"
            alt="peopledrinking"
            className="w-100 rounded-4"
          />
          x
        </Col>
        <Col className=" col-6 col-xl-8 d-flex flex-column justify-content-center align-items-center">
          <div>
            <div className="display-3 p-0 fw-bold m-0">COME</div>
            <div className="display-3 p-0 fw-bold m-0">FUNZIONA</div>
            <div className="display-3 p-0 fw-bold m-0 text-yellow">
              BARDOO??
            </div>
            <div className="d-flex justify-content-center">
              <img
                src="/assets/images/details&logo/freccia-giu-bianca.png"
                alt="frecciabianca"
              />
            </div>
          </div>
          <div className="d-none d-xl-block">
            <MainAside />
            <div className="text-end display-3 fw-bold">
              FACILE, N
              <span>
                <img
                  src="/assets/images/details&logo/ocerchiata.png"
                  alt="`o` cerchiata"
                />
              </span>
              ?!
            </div>
          </div>
        </Col>
        <Col>
          <div className="d-xl-none">
            <MainAside />
            <div className="text-end display-3 fw-bold">
              FACILE, N
              <span>
                <img
                  src="/assets/images/details&logo/ocerchiata.png"
                  alt="`o` cerchiata"
                  style={{ width: "50px" }}
                  className="me-2"
                />
              </span>
              ?!
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default SubHeroSection;
