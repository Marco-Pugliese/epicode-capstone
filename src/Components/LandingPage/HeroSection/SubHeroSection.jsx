import { Col, Container, Row } from "react-bootstrap";
import {
  MusicNote,
  MusicNoteBeamed,
  MusicPlayerFill,
} from "react-bootstrap-icons";

const SubHeroSection = () => {
  return (
    <Container fluid className="bg-chiaro">
      <Row className="justify-content-center">
        <Col className=" col-3 mx-1 d-flex justify-content-center align-items-center fs-5 p-5 shadow-sm rounded-3">
          <MusicNote className="fs-1" />
          <div className="mx-4">
            <div className="number text-center">
              {Math.round(Math.random() * 107897)}
            </div>
            <div>Utenti Iscritti</div>
          </div>
        </Col>
        <Col className="col-3 mx-1 d-flex justify-content-center align-items-center fs-5 p-5 shadow-sm rounded-3">
          <MusicPlayerFill className="fs-1" />
          <div className="mx-4">
            <div className="number text-center">
              {Math.round(Math.random() * 7897)}
            </div>
            <div>Eventi Creati</div>
          </div>
        </Col>
        <Col className=" col-3 mx-1 d-flex justify-content-center align-items-center fs-5 p-5 shadow-sm rounded-3">
          <MusicNoteBeamed className="fs-1" />
          <div className="mx-4">
            <div className="number text-center">
              {Math.round(Math.random() * 17897)}
            </div>
            <div>Recensioni Effettuate</div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center pt-5 pb-2">
        <Col className="col-9 text-center fs-2 my-5">
          LOREM_MUSIC è la piattaforma di riferimento di numerosi musicisti e
          titolari per organizzare i propri eventi: un matrimonio, una festa, un
          concerto, o qualsiasi altro tipo di evento musicale
        </Col>
      </Row>
    </Container>
  );
};
export default SubHeroSection;
