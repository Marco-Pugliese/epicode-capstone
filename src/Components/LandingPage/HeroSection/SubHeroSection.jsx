import { Col, Container, Row } from "react-bootstrap";

import MainAside from "../AsideSection/MainAside";

const SubHeroSection = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col className="col-4 ">
          <img
            src="https://www.placedog.net/500/800"
            alt="peopledrinking"
            className="w-100"
          />
        </Col>
        <Col>
          <div>
            <div className="display-3 p-0 m-0">COME</div>
            <div className="display-3 p-0 m-0">FUNZIONA</div>
            <div className="display-3 p-0 m-0">BARDOO??</div>
          </div>

          <p>
            <MainAside />
          </p>
          <h2 className="text-end display-3">FACILE, NO?!</h2>
        </Col>
      </Row>
    </Container>
  );
};
export default SubHeroSection;
