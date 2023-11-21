import { Col, Container, Row } from "react-bootstrap";

const MainHeroSection = () => {
  return (
    <Container id="heroSection" fluid className="py-5">
      <Row className="py-5">
        <Col className="col-8 display-4 fw-bold d-flex justify-content-center align-items-center px-3...">
          <div className="px-5 py-2 text-sand">
            Dall'idea al palco: <br />
            dai vita ai tuoi{" "}
            <span className="text-blueLight fw-bold fst-italic">
              eventi musicali
            </span>{" "}
            e connettiti con l'energia della tua serata perfetta.
          </div>
        </Col>
        <Col className="col-4 d-flex justify-content-center align-items-center">
          <img
            src="https://www.placedog.net/600/200"
            alt=""
            className="w-100"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default MainHeroSection;
