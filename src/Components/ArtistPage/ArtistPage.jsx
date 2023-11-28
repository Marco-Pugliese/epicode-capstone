import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ArtistPage = () => {
  const userLogged = useSelector((state) => state.LoggedIn.user[0]);
  const { id } = useParams();
  const allArtists = useSelector((state) => state.MyFetches.artists);
  const ArtistWithIdParam = allArtists[id].registered_mails;
  console.log(ArtistWithIdParam, userLogged.email);
  return (
    <Container
      id="artistPage"
      fluid
      className="h-100 bg-bluedark py-1 text-yellow"
    >
      <Row className="justify-content-center">
        <Col className="col-9 ">
          <Row className="gx-5">
            <Col className="col-9 shadow ">
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
                NOMEBAND <div className="fw-normal px-3"> | </div>
                <div className="fs-6 my-auto">
                  (tipo di artista(dj/cantautore/band,ecc))
                </div>
              </div>
              <div className="position-relative translate-middle-y fs-3">
                Descrizione Band (formazione, genere,ecc)
              </div>
              <div className="position-relative fs-5">
                Link YouTube + iFrame video
              </div>
            </Col>
            <Col className="col-3 shadow d-flex flex-column">
              <div className="py-1 h-50">
                <h3 className="m-0 p-0">Eventi in Programma</h3>
                <div className="smaller">map degli eventi in Programma</div>
              </div>
              <div className="py-1 h-50">
                <h3 className="m-0 p-0">Attività Recenti</h3>
                <div className="smaller">map dei concerti fatti</div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default ArtistPage;
