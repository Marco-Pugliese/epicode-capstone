import { Col, Container, Row } from "react-bootstrap";
import { GearFill, Search, StarFill } from "react-bootstrap-icons";

const MainAside = () => {
  return (
    <>
      <Container className="d-flex flex-column align-items-center justify-content-center mt-3">
        <div className="py-2 fs-3">COME FUNZIONA</div>
        <div className="py-2 fs-5">
          Cercare
          <span className="number mx-2">
            Musicisti/Eventi(EffettoDaInserire)
          </span>
          non è mai stato così semplice!!
        </div>
      </Container>
      <Container fluid className="py-2">
        <Row className="justify-content-center">
          <Col className="col-3 mx-1 shadow-sm">
            <div className="d-flex justify-content-center my-3">
              <Search className="display-2" />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="number">STEP 1</h3>
              <p>
                Usa i nostri filtri di ricerca per trovare facilmente tutto ciò
                di cui hai bisogno
              </p>
            </div>
          </Col>
          <Col className="col-3 mx-1 shadow-sm">
            <div className="d-flex justify-content-center my-3">
              <StarFill className="display-2" />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="number">STEP 2</h3>
              <p>
                Visualizza le recensioni degli eventi, delle strutture, e degli
                artisti
              </p>
            </div>
          </Col>
          <Col className="col-3 mx-1 shadow-sm">
            <div className="d-flex justify-content-center my-3">
              <GearFill className="display-2" />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="number">STEP 3</h3>
              <p>
                Usa i nostri servizi se hai bisogno di contattare artisti o
                candidarti ad Eventi Organizzati
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MainAside;
