import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchHeroSection from "../LandingPage/HeroSection/SearchHeroSection";
import ArtistResult from "./ArtistResult";
import ActivityResult from "./ActivityResult";

const ResultsPage = () => {
  const allArtist = useSelector((state) => state.MyFetches.artists);
  const allActivities = useSelector((state) => state.MyFetches.activities);
  const filter = useSelector((state) => state.Filter.filter[0]);
  const { id } = useParams();
  return (
    <div id="resultsPage" className="text-white">
      <SearchHeroSection compact={true} />
      <Container>
        <div className="text-center display-6 pt-2">
          Tutti i Risultati per: "
          <span className="fw-bolder text-yellow">{id}</span>"
        </div>
      </Container>

      <Container>
        {filter !== "genere" &&
          filter !== "attività" &&
          filter !== "artista" && (
            <Row className="justify-content-center">
              <Col className="col-12 col-lg-3 m-1 shadow-lg rounded">
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
                    ) : null
                  )}
                </div>
              </Col>
              <Col className="col-12 col-lg-3 m-1 shadow-lg rounded">
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
                      ) : null
                    )}
                </div>
              </Col>
              <Col className="col-12 col-lg-3 m-1 shadow-lg rounded">
                <div className="fs-2 fw-bold pt-2 text-yellow">
                  Genere : <span className="fst-italic fw-normal">{id}</span>
                </div>
                <div>
                  {allArtist &&
                    allArtist.map((singleArtist) =>
                      singleArtist.genre
                        .toLowerCase()
                        .includes(`${id}`.toLowerCase()) ? (
                        <ArtistResult
                          key={singleArtist.id}
                          singleArtist={singleArtist}
                        />
                      ) : null
                    )}
                </div>
              </Col>
            </Row>
          )}
        <>
          {filter === "genere" && (
            <>
              <div className="fs-2 fw-bold pt-2 text-yellow">
                Genere : <span className="fst-italic fw-normal">{id}</span>
              </div>
              <div>
                {allArtist &&
                  allArtist.map((singleArtist) =>
                    singleArtist.genre
                      .toLowerCase()
                      .includes(`${id}`.toLowerCase()) ? (
                      <ArtistResult
                        key={singleArtist.id}
                        singleArtist={singleArtist}
                      />
                    ) : null
                  )}
              </div>
            </>
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
                    ) : null
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
                  ) : null
                )}
              </div>
            </>
          )}
        </>
      </Container>
    </div>
  );
};
export default ResultsPage;
