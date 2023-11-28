import { Col, Container, Row } from "react-bootstrap";

import MainAside from "../AsideSection/MainAside";

const SubHeroSection = () => {
  return (
    <Container className="text-white">
      <Row className="py-3">
        <Col className="col-4 ">
          <img
            src="/assets/images/general/musiclive.avif"
            alt="peopledrinking"
            className="w-100 rounded-4"
          />
        </Col>
        <Col>
          <div className="">
            <div className="display-3 p-0 fw-bold m-0">COME</div>
            <div className="display-3 p-0 fw-bold m-0">FUNZIONA</div>
            <div className="display-3 p-0 fw-bold m-0 text-yellow">
              BARDOO??
            </div>
          </div>

          <div>
            <MainAside />
          </div>
          <div className="text-end display-3 ">FACILE, NO?!</div>
        </Col>
      </Row>
    </Container>
  );
};
export default SubHeroSection;
