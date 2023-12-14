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
        </Col>
        <Col className=" col-6 col-xl-8 d-flex flex-column justify-content-center align-items-center">
          <div>
            <div className="display-3 p-0 fw-bold m-0">COME</div>
            <div className="display-3 p-0 fw-bold m-0">FUNZIONA</div>
            <div className="display-3 p-0 fw-bold m-0">
              <img
                src="/assets/images/details&logo/Bardoo_Logo-01 copia.png"
                alt="logo"
                style={{ width: "300px" }}
                className="mb-4"
              />
              <span className="ms-1">?</span>
            </div>

            <div className="d-flex justify-content-center">
              <img
                src="/assets/images/details&logo/freccia-giu-bianca.png"
                alt="frecciabianca"
                style={{ width: "80px" }}
                className="mt-2"
              />
            </div>
          </div>
          <div className="d-none d-xl-block">
            <MainAside />
            <div className="text-end display-3 fw-bold">
              FACILE, N
              <img
                src="/assets/images/details&logo/obianca.png"
                alt="spinner"
                style={{ width: "65px" }}
                className="rotate-scale-down"
              />
              ?!
            </div>
          </div>
        </Col>
        <Col>
          <div className="d-xl-none">
            <MainAside />
            <div className="text-end display-3 fw-bold">
              FACILE, N
              <img
                src="/assets/images/details&logo/obianca.png"
                alt="spinner"
                style={{ width: "65px" }}
                className="rotate-scale-down"
              />
              ?!
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default SubHeroSection;
