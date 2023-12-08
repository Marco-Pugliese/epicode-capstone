import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import WelcomeMessage from "../AccountPage/WelcomeMessage";
import LogOutHeader from "../Header/MyHeader/LogOutHeader";
import SubHeader from "../Header/MyHeader/SubHeader";

const EventsPage = ({ noLogOut }) => {
  const allEvents = useSelector((state) => state.MyFetches.events);
  const [viewMore, setViewMore] = useState(false);
  const logged = useSelector((state) => state.LoggedIn.isLogged);
  const user = useSelector((state) => state.LoggedIn);
  const newDate = new Date();
  return (
    allEvents && (
      <div id="EventsPage">
        {logged === false ? (
          <SubHeader />
        ) : noLogOut === false ? (
          <LogOutHeader />
        ) : (
          <WelcomeMessage user={user.user} />
        )}
        <Container>
          <Row>
            <Col className="col-12 text-center display-4 d-flex align-items-center justify-content-center fw-bold text-yellow title">
              I NUOVI EVENTI DI BARDOO
            </Col>
          </Row>
          <Row>
            <Col className="col-12 text-center d-flex align-items-center justify-content-center fw-bold text-yellow">
              Gli Ultimi Eventi Creati
            </Col>
            <Col>
              {allEvents
                .filter((allEvents2, i) => (viewMore === false ? i < 4 : i < 8))
                .map((singleEvent) => {
                  return (
                    <Col
                      className="col-12 mb-1 text-yellow"
                      key={singleEvent.id}
                    >
                      {parseInt(newDate - new Date(singleEvent.date_event)) <
                      0 ? null : (
                        <div>
                          {singleEvent.name_event}
                          <span className="extrasmall fw-normal mx-1">
                            - {singleEvent.date_event.slice(8, 10)}/
                            {singleEvent.date_event.slice(5, 7)}/
                            {singleEvent.date_event.slice(0, 4)}
                          </span>
                        </div>
                      )}
                    </Col>
                  );
                })}
              <div
                className="text-end text-yellow pe-4 pointer viewMore"
                onClick={() => {
                  setViewMore(!viewMore);
                }}
              >
                {viewMore === true ? "Mostra di meno" : "Mostra di più"}
              </div>
            </Col>
          </Row>
          {logged && (
            <Row>
              <Col className="col-12">Nei tuoi dintorni: </Col>
              {allEvents
                .filter((allEvents2, i) => (viewMore === false ? i < 4 : i < 8))
                .map((singleEvent) => {
                  return (
                    <Col
                      className="col-12 mb-1 text-yellow"
                      key={singleEvent.id}
                    >
                      {parseInt(newDate - new Date(singleEvent.date_event)) <
                      0 ? null : (
                        <div>
                          {singleEvent.name_event}
                          <span className="extrasmall fw-normal mx-1">
                            - {singleEvent.date_event.slice(8, 10)}/
                            {singleEvent.date_event.slice(5, 7)}/
                            {singleEvent.date_event.slice(0, 4)}
                          </span>
                        </div>
                      )}
                    </Col>
                  );
                })}
            </Row>
          )}
        </Container>
      </div>
    )
  );
};
export default EventsPage;
