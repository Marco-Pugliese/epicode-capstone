import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ActivityPage = () => {
  const userLogged = useSelector((state) => state.LoggedIn.user[0]);
  const { id } = useParams();
  const allArtists = useSelector((state) => state.MyFetches.artists);
  const ArtistWithIdParam = allArtists[id].registered_mails;
  console.log(ArtistWithIdParam, userLogged.email);
  return (
    <Container fluid className="h-100 bg-bluedark py-1 text-yellow">
      <Row className="justify-content-center">
        <Col className="col-7 ">
          <Row className="gx-5">
            <Col className="shadow ">
              <div className=" w-100">
                <img
                  src="https://placedog.net/1200/290"
                  alt=""
                  className="w-100 rounded"
                />
              </div>
              <div className="position-relative top-0 px-5">
                <img
                  src="https://placedog.net/100/100"
                  alt=""
                  className="translate-middle-y rounded-circle"
                />
              </div>
              <div className="position-relative translate-middle-y fw-bold display-6 d-flex">
                NOME ATTIVITA' <div className="fw-normal px-3"> | </div>
                <div className="fs-6 my-auto">
                  (tipo di attività(bar/ristorante/pub))
                </div>
              </div>
              <div className="position-relative translate-middle-y fs-3">
                Descrizione Bar (Opzionale)
              </div>

              <div className="d-flex">
                <div className="w-50">
                  <div className="py-1">
                    <h3 className="m-0 p-0">Eventi in Programma</h3>
                    <div className="smaller">map degli eventi in Programma</div>
                    <div className="smaller">aggiungi un evento+</div>
                  </div>
                  <div className="py-1">
                    <h3 className="m-0 p-0">Attività Recenti</h3>
                    <div className="smaller">map dei concerti fatti</div>
                  </div>
                </div>
                <div>Calendario</div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default ActivityPage;
