import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Envelope, Telephone } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArtistsAction } from "../Redux/Actions";

const ArtistPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allArtists = useSelector((state) => state.MyFetches.artists);
  const theArtist =
    allArtists &&
    allArtists.find(
      (singleArtist) => parseInt(singleArtist.id) === parseInt(id)
    );
  useEffect(() => {
    dispatch(getArtistsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!theArtist) {
    // navigate to 404
  }
  return (
    <Container id="artistPage" fluid className="h-100 py-1 text-yellow">
      <Row className="justify-content-center">
        <Col className="col-9 rounded">
          <Row>
            <Col className="col-9 me-1 bg-transparent-blue rounded">
              <div id="general">
                <div className="w-100">
                  <img
                    src="https://placedog.net/1400/250"
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
                  {theArtist.name}

                  <div className="fw-normal px-3"> | </div>
                  <div className="fs-6 my-auto">
                    {theArtist.kind_of} / {theArtist.genre}
                  </div>
                </div>
                <div className="position-relative translate-middle-y fs-3">
                  {theArtist.band_components.map((singleComponent, i) => (
                    <span key={i} className="me-2">
                      {singleComponent}
                    </span>
                  ))}
                </div>

                <div className="position-relative fs-5">
                  Link YouTube + iFrame video
                </div>
              </div>
              <div
                id="contacts"
                className="d-block text-end position-relative translate-middle-y fs-6 "
              >
                <div>
                  <Envelope /> : {theArtist.registered_mails}
                </div>
                <div>
                  <Telephone /> : 918347918 (da aggiungere nel JSON)
                </div>
              </div>
            </Col>
            <Col className="ms-1 col-2 shadow d-flex bg-transparent-blue rounded flex-column">
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
