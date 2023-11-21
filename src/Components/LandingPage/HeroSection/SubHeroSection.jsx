import { Col, Container, Row } from "react-bootstrap";
import {
  MusicNote,
  MusicNoteBeamed,
  MusicPlayerFill,
} from "react-bootstrap-icons";

const SubHeroSection = () => {
  return (
    <Container fluid className="bg-bluedark">
      <Row className="justify-content-center">
        <Col className=" col-3 mx-1 d-flex justify-content-center align-items-center fs-5 p-5 shadow rounded-5 text-yellow">
          <MusicNote className="fs-1" />
          <div className="mx-4">
            <div className="smaller text-blueLight text-center">
              {Math.round(Math.random() * 107897)}
            </div>
            <div>Utenti Iscritti</div>
          </div>
        </Col>
        <Col className="col-3 mx-1 d-flex justify-content-center align-items-center fs-5 p-5 shadow rounded-5 text-yellow">
          <MusicPlayerFill className="fs-1" />
          <div className="mx-4">
            <div className="smaller text-blueLight text-center">
              {Math.round(Math.random() * 7897)}
            </div>
            <div>Eventi Creati</div>
          </div>
        </Col>
        <Col className=" col-3 mx-1 d-flex justify-content-center align-items-center fs-5 p-5 shadow rounded-5 text-yellow">
          <MusicNoteBeamed className="fs-1" />
          <div className="mx-4">
            <div className="smaller text-blueLight text-center">
              {Math.round(Math.random() * 17897)}
            </div>
            <div>Recensioni Effettuate</div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center pt-5 pb-2">
        <Col className="col-9 text-center text-yellow fs-2 my-5">
          <span className="text-blueLight">LOREM_MUSIC: </span> L'epicentro
          preferito da musicisti e organizzatori per trasformare eventi in
          esperienze indimenticabili! Che sia un matrimonio, una festa o un
          concerto, la tua melodia perfetta inizia qui."
        </Col>
      </Row>
    </Container>
  );
};
export default SubHeroSection;
