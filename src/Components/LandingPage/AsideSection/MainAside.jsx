import { Col, Container, Row } from "react-bootstrap";
import { GearFill, Search, StarFill } from "react-bootstrap-icons";

const MainAside = () => {
  return (
    <div>
      <Container className=" d-flex flex-column align-items-center justify-content-center pt-5 text-yellow">
        <div className="py-2 fs-4 position-relative text-white ">
          Cercare
          <span className=" mx-2 position-relative fw-bold text-yellow">
            <span className="slide-top2 ms-2 position-absolute tranlate-middle">
              Musicisti
            </span>
            <span className="slide-top ms-2 position-absolute tranlate-middle">
              Eventi
            </span>
          </span>
          <div>non è mai stato così semplice!!</div>
        </div>
      </Container>
      <Container fluid className="py-2">
        <Row className="justify-content-center">
          <Col className="col-3 mx-1 shadow-lg rounded-5">
            <div className="d-flex justify-content-center my-3">
              <Search className="display-2 text-yellow" />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3>STEP 1</h3>
              <p className="px-2 text-center smaller fw-bold">
                Usa i nostri filtri di ricerca per trovare facilmente tutto ciò
                di cui hai bisogno
              </p>
            </div>
          </Col>
          <Col className="col-3 mx-1 shadow-lg rounded-5">
            <div className="d-flex justify-content-center my-3">
              <StarFill className="display-2 text-yellow" />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3>STEP 2</h3>
              <p className="px-2 text-center smaller fw-bold">
                Visualizza tutte le informazioni riguardanti degli eventi, delle
                strutture, e degli artisti
              </p>
            </div>
          </Col>
          <Col className="col-3 mx-1 shadow-lg rounded-5">
            <div className="d-flex justify-content-center my-3">
              <GearFill className="display-2 text-yellow" />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3>STEP 3</h3>
              <p className="px-2 text-center smaller fw-bold">
                Usa i nostri servizi se hai bisogno di contattare artisti o
                candidarti ad Eventi Organizzati
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default MainAside;
