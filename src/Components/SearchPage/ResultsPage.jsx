import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchHeroSection from "../LandingPage/HeroSection/SearchHeroSection";
import ArtistResult from "./ArtistResult";
import ActivityResult from "./ActivityResult";
import { useState } from "react";
import Spinner from "../Spinner/Spinner";

const ResultsPage = () => {
  const allArtist = useSelector((state) => state.MyFetches.artists);
  const allActivities = useSelector((state) => state.MyFetches.activities);
  const filter = useSelector((state) => state.Filter.filter[0]);
  const { id } = useParams();
  const [show, setShow] = useState(true);
  const hideSpinner = () => {
    setTimeout(() => setShow(false), 1000);
  };
  return (
    <div id="resultsPage" className="text-white">
      {hideSpinner()}
      {show === true ? (
        <Spinner />
      ) : (
        <div className="h-100">
          <SearchHeroSection compact={true} />
          <Container>
            <div className="text-center display-6 pt-2">
              {filter === "zona"
                ? "Tutti i risultati in : "
                : "Tutti i risultati per: "}{" "}
              "<span className="fw-bolder text-yellow">{id}</span>"
            </div>
          </Container>

          <Container>
            {filter !== "zona" &&
              filter !== "attività" &&
              filter !== "artista" && (
                <Row className="justify-content-center">
                  <Col className="col-12 col-lg-4 m-1 shadow-lg rounded">
                    <div className="fs-2 fw-bold pt-2 text-yellow">
                      Attività:
                    </div>
                    <div>
                      {allActivities.map((singleActivity) =>
                        singleActivity.name_activity
                          .toLowerCase()
                          .includes(`${id}`.toLowerCase()) ? (
                          <ActivityResult
                            key={singleActivity.id}
                            singleActivity={singleActivity}
                          />
                        ) : (
                          <span className="smaller">
                            Nessun risultato trovato
                          </span>
                        )
                      )}
                    </div>
                  </Col>
                  <Col className="col-12 col-lg-4 m-1 shadow-lg rounded">
                    <div className="fs-2 fw-bold pt-2 text-yellow">
                      Artisti:
                    </div>
                    <div>
                      {allArtist &&
                        allArtist.map((singleArtist) =>
                          singleArtist.name
                            .toLowerCase()
                            .includes(`${id}`.toLowerCase()) ? (
                            <ArtistResult
                              key={singleArtist.id}
                              singleArtist={singleArtist}
                            />
                          ) : (
                            <span className="smaller">
                              Nessun risultato trovato
                            </span>
                          )
                        )}
                    </div>
                  </Col>
                </Row>
              )}
            <>
              {filter === "zona" && (
                <Row>
                  <Col>
                    <div className="fs-2 fw-bold pt-2 text-yellow">
                      Artisti:
                    </div>
                    <div>
                      {allArtist &&
                        allArtist.map((singleArtist) =>
                          singleArtist.city
                            .toLowerCase()
                            .includes(`${id}`.toLowerCase()) ||
                          singleArtist.region
                            .toLowerCase()
                            .includes(`${id}`.toLowerCase()) ||
                          singleArtist.country
                            .toLowerCase()
                            .includes(`${id}`.toLowerCase()) ? (
                            <ArtistResult
                              key={singleArtist.id}
                              singleArtist={singleArtist}
                            />
                          ) : (
                            <span className="smaller">
                              Nessun risultato trovato
                            </span>
                          )
                        )}
                    </div>
                  </Col>
                  <Col>
                    <div className="fs-2 fw-bold pt-2 text-yellow">
                      Attività:
                    </div>
                    <div>
                      {allActivities.map((singleActivity) =>
                        singleActivity.city
                          .toLowerCase()
                          .includes(`${id}`.toLowerCase()) ||
                        singleActivity.region
                          .toLowerCase()
                          .includes(`${id}`.toLowerCase()) ||
                        singleActivity.country
                          .toLowerCase()
                          .includes(`${id}`.toLowerCase()) ? (
                          <ActivityResult
                            key={singleActivity.id}
                            singleActivity={singleActivity}
                          />
                        ) : (
                          <span className="smaller">
                            Nessun risultato trovato
                          </span>
                        )
                      )}
                    </div>
                  </Col>
                </Row>
              )}
            </>
            <>
              {filter === "artista" && (
                <>
                  <div className="fs-2 fw-bold pt-2 text-yellow">Artisti:</div>
                  <div>
                    {allArtist &&
                      allArtist.map((singleArtist) =>
                        singleArtist.name
                          .toLowerCase()
                          .includes(`${id}`.toLowerCase()) ? (
                          <ArtistResult
                            key={singleArtist.id}
                            singleArtist={singleArtist}
                          />
                        ) : (
                          <span className="smaller">
                            Nessun risultato trovato
                          </span>
                        )
                      )}
                  </div>
                </>
              )}
            </>
            <>
              {filter === "attività" && (
                <>
                  <div className="fs-2 fw-bold pt-2 text-yellow">Attività:</div>
                  <div>
                    {allActivities.map((singleActivity) =>
                      singleActivity.name_activity
                        .toLowerCase()
                        .includes(`${id}`.toLowerCase()) ? (
                        <ActivityResult
                          key={singleActivity.id}
                          singleActivity={singleActivity}
                        />
                      ) : (
                        <span className="smaller">
                          Nessun risultato trovato
                        </span>
                      )
                    )}
                  </div>
                </>
              )}
            </>
          </Container>
        </div>
      )}
    </div>
  );
};
export default ResultsPage;
