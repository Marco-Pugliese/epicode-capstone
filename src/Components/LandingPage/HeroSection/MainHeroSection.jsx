import { Col, Container, Row } from "react-bootstrap";
import { MusicNote } from "react-bootstrap-icons";

const MainHeroSection = () => {
  return (
    <div className="">
      <Container className="pt-3 text-white">
        <Row className="justify-content-center">
          <Col className="col-10 col-lg-5 ">
            <div className="display-4 pe-5 pb-5 position-relative fw-bold">
              ISCRIVITI GRATIS E REGISTRATI COME
              <img
                src="/assets/images/details&logo/freccia-dx-bianca.png"
                alt="freccia destra"
                id="freccia-dx"
                className="d-none d-lg-block"
              />
              <img
                src="/assets/images/details&logo/freccia-giu-bianca.png"
                alt="freccia giu"
                id="freccia-giu"
                className="d-lg-none ms-5"
              />
            </div>

            <div className="pt-5 d-none d-lg-block">
              <div className="d-flex justify-content-between fs-3 mb-3">
                <MusicNote /> <MusicNote />
              </div>
              <div>
                Connettiamo passioni e talenti per creare esperienze
                indimenticabili! Iscriviti al nostro sito e fai parte di una
                vibrante comunità dove artisti e attività si incontrano,
                collaborano e creano insieme magia musicale. Rendiamo ogni
                evento un'opportunità unica: unisciti a noi per plasmare il
                futuro della musica e delle esperienze straordinarie. Iscriviti
                ora e inizia a dare vita alla tua passione!
              </div>
              <div className="d-flex justify-content-between fs-3 mb-3">
                <MusicNote /> <MusicNote />
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

                <div className="text-center fs-2 text-yellow">
                  <span className="position-relative display-4 fw-bold text-white">
                    ARTISTA
                    <img
                      src="/assets/images/details&logo/ondeblutriple.png"
                      alt="cercatore"
                      style={{ width: "230px" }}
                      className="position-absolute top-100 start-50 translate-middle"
                    />
                  </span>
                </div>
              </Col>
              <Col className="ps-4">
                <img
                  src="/assets/images/general/fotobar1.avif"
                  alt="cercatore"
                  className="w-100 rounded-4"
                />
                <div className="text-center text-yellow fs-2">
                  <span className="position-relative display-4 fw-bold text-white">
                    ATTIVITA'
                    <img
                      src="/assets/images/details&logo/ondeblutriple.png"
                      alt="cercatore"
                      style={{ width: "230px" }}
                      className="position-absolute top-100 start-50 translate-middle"
                    />
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default MainHeroSection;
