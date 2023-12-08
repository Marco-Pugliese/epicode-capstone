import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Envelope,
  EnvelopeFill,
  MusicNoteBeamed,
  MusicNoteList,
  MusicPlayerFill,
  PeopleFill,
  Telephone,
  TelephoneFill,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArtistsAction, getEventsAction } from "../Redux/Actions";
import InProgrammArtist from "./InProgrammArtist";
import DoneEventsArtist from "./DoneEventsArtist";

const ArtistPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const events = useSelector((state) => state.MyFetches.events);
  const allArtists = useSelector((state) => state.MyFetches.artists);
  const theArtist =
    allArtists.length > 0
      ? allArtists.find(
          (singleArtist) => parseInt(singleArtist.id) === parseInt(id)
        )
      : null;
  useEffect(() => {
    dispatch(getArtistsAction());
    dispatch(getEventsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container id="artistPage" fluid className="h-100 py-1 text-white">
      <Row className="justify-content-center">
        <Col className="col-9 rounded ">
          <Row className="gx-5">
            <Col className="col-9 rounded">
              <div id="general" className="bg-bluedark rounded-2">
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
                {theArtist && (
                  <Row className=" fw-bold mt-2 ps-2">
                    <Col className="col-8 ">
                      <span className="display-6 fw-bold text-yellow">
                        {theArtist.name}
                      </span>
                      <div className="position-relative small fst-italic pb-4 pe-4 fw-normal">
                        {theArtist.description}
                      </div>
                    </Col>
                    <Col>
                      {theArtist && (
                        <Row className="fs-6 my-auto flex-column text-start">
                          <Col className="smaller">
                            <Row>
                              <Col className="col-1">
                                <MusicNoteList className="text-yellow" />
                              </Col>
                              <Col> {theArtist.kind_of}</Col>
                            </Row>
                          </Col>
                          <Col className="smaller">
                            <Row>
                              <Col className="col-1">
                                <MusicNoteBeamed className="text-yellow" />
                              </Col>
                              <Col> {theArtist.genre}</Col>
                            </Row>
                          </Col>
                          <Col className="smaller">
                            <Row>
                              <Col className="col-1">
                                <PeopleFill className="text-yellow" />
                              </Col>
                              <Col> {theArtist.band_components}</Col>
                            </Row>
                          </Col>
                          <Col className="smaller">
                            <Row>
                              <Col className="col-1">
                                <EnvelopeFill className="text-yellow" />
                              </Col>
                              <Col> {theArtist.registered_mails}</Col>
                            </Row>
                          </Col>
                          <Col className="smaller">
                            <Row>
                              <Col className="col-1">
                                <TelephoneFill className="text-yellow" />
                              </Col>
                              <Col> {theArtist.phone}</Col>
                            </Row>
                          </Col>
                        </Row>
                      )}
                    </Col>
                  </Row>
                )}
                {theArtist && (
                  <div className="fs-3">
                    {theArtist.band_components.length > 1
                      ? theArtist.band_components.map((singleComponent, i) => (
                          <span key={i} className="me-2">
                            {singleComponent}
                          </span>
                        ))
                      : null}
                  </div>
                )}

                <div className="py-1 h-50">
                  <h3 className="m-0 p-0 mt-5 text-yellow ps-2">
                    Eventi in Programma
                  </h3>
                  <div className="smaller ">
                    <InProgrammArtist artist={theArtist} events={events} />
                  </div>
                </div>
              </div>
            </Col>
            <Col className=" col-3 bg-bluedark d-flex bg-transparent-blue rounded flex-column">
              <div className="py-1 h-50">
                <h3 className="m-0 p-0 text-yellow">Attività Recenti</h3>
                <div className="smaller">
                  <DoneEventsArtist artist={theArtist} events={events} />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ArtistPage;
