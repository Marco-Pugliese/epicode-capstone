import { Col, Container, Row } from "react-bootstrap";
import { ArrowRight, MusicNote } from "react-bootstrap-icons";

const MainHeroSection = () => {
  return (
    <Container className="pt-3">
      <Row className="justify-content-center">
        <Col className="col-5 ">
          <div className="display-4 pe-5 pb-5">
            ISCRIVITI GRATIS E REGISTRATI COME <ArrowRight />
          </div>

          <div className="pt-5">
            <div>
              <MusicNote /> BENE
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              omnis voluptatibus ut perferendis praesentium? Reprehenderit,
              fugit necessitatibus, voluptatum earum ut expedita quasi error
              dolores repellendus porro mollitia possimus a ipsam.{" "}
            </div>
          </div>
        </Col>
        <Col>
          <Row className="justify-content-center gx-4">
            <Col className="pe-4">
              <img
                src="https://placedog.net/349/600"
                alt="cercatore"
                className="w-100 rounded-3"
              />
              <div className="text-end fs-3  me-3">ARTISTA</div>
            </Col>
            <Col className="ps-4">
              <img
                src="https://placedog.net/350/600"
                alt="cercatore"
                className="w-100 rounded-3"
              />
              <div className="text-end fs-3  me-3">ATTIVITA'</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default MainHeroSection;
