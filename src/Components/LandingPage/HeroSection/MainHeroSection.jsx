import { Col, Container, Row } from "react-bootstrap";
import { MusicNote } from "react-bootstrap-icons";

const MainHeroSection = () => {
  return (
    <Container className="pt-3 text-white">
      <Row className="justify-content-center">
        <Col className="col-12 col-lg-5 ">
          <div className="display-4 pe-5 pb-5 position-relative">
            ISCRIVITI GRATIS E REGISTRATI COME
            <img
              src="/assets/images/details&logo/freccia-dx-bianca.png"
              alt="freccia destra"
              id="freccia-dx"
              className="d-none d-lg-block"
            />
            <img
              src="/assets/images/details&logo/frecciagiublue.png"
              alt="freccia giu"
              id="freccia-giu"
              className="d-lg-none"
            />
          </div>

          <div className="pt-5 d-none d-lg-block">
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
            <Col className="pe-4 position-relative">
              <img
                src="/assets/images/general/photo-band.avif"
                alt="cercatore"
                className="w-100 rounded-4"
              />

              <div className="text-center fs-2 fw-bold text-yellow">
                ARTISTA
              </div>
            </Col>
            <Col className="ps-4">
              <img
                src="/assets/images/general/fotobar1.avif"
                alt="cercatore"
                className="w-100 rounded-4"
              />
              <div className="text-center text-yellow fs-2 fw-bold ">
                ATTIVITA'
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default MainHeroSection;
