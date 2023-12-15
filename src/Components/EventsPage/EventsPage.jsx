import { useState } from "react";
import { Col, Collapse, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import WelcomeMessage from "../AccountPage/WelcomeMessage";
import LogOutHeader from "../Header/MyHeader/LogOutHeader";
import SubHeader from "../Header/MyHeader/SubHeader";
import ModalEvent from "./ModalEvent";
import { DashCircle, PlusCircleFill } from "react-bootstrap-icons";
import Spinner from "../Spinner/Spinner";

const EventsPage = ({ noLogOut }) => {
  const allEvents = useSelector((state) => state.MyFetches.events);
  const [viewMore, setViewMore] = useState(false);
  const [viewMore2, setViewMore2] = useState(false);
  const logged = useSelector((state) => state.LoggedIn.isLogged);
  const user = useSelector((state) => state.LoggedIn);
  const newDate = new Date();
  const [show, setShow] = useState(true);
  const hideSpinner = () => {
    setTimeout(() => setShow(false), 1000);
  };
  return (
    allEvents && (
      <div id="EventsPage" className="text-white">
        {hideSpinner()}
        {show === true ? (
          <Spinner />
        ) : (
          <Container fluid>
            {logged === false ? (
              <SubHeader />
            ) : noLogOut === false ? (
              <LogOutHeader />
            ) : (
              <WelcomeMessage user={user.user} />
            )}

            <Container>
              <Row>
                <Col className="col-12 text-center display-5 d-flex align-items-center justify-content-center fw-bold title">
                  <h1 className="text-white fw-bold d-flex align-items-center p-0 m-0 display-5 nexa me-1">
                    Gli<span className="mx-2 text-yellow"> Eventi </span>di
                  </h1>
                  <img
                    src="/assets/images/details&logo/Bardoo_Logo-02 copia.png"
                    alt="logo"
                    style={{ width: "175px" }}
                    className="minibottom ms-2"
                  />
                </Col>
              </Row>
              <Row className="rounded-4">
                <Col className="col-12 text-center mb-3 d-flex align-items-center justify-content-center fw-bold text-yellow fs-4">
                  Gli ultimi eventi creati
                </Col>
                <Col>
                  {allEvents
                    .filter((allEvents2, i) =>
                      viewMore === false ? i < 4 : i < 8
                    )
                    .map((singleEvent) => {
                      return (
                        <Col
                          className="col-12 mb-1 text-white bg-blueLight shadow-lg rounded-4 p-2 "
                          key={singleEvent.id}
                        >
                          {parseInt(
                            newDate - new Date(singleEvent.date_event)
                          ) > 0 ? null : (
                            <ModalEvent
                              singleEvent={singleEvent}
                              eventsPage={true}
                            />
                          )}
                        </Col>
                      );
                    })}
                  <div
                    className="text-end pe-4 pointer viewMore text-yellow"
                    onClick={() => {
                      setViewMore(!viewMore);
                    }}
                  >
                    {viewMore === true ? <DashCircle /> : <PlusCircleFill />}
                  </div>
                </Col>
              </Row>
              {logged && (
                <Row className="bg-bluedark rounded-4 my-4">
                  <Col className="col-12 text-center d-flex align-items-center justify-content-center fw-bold text-yellow fs-4">
                    Tutto nei dintorni di {user.user[0].city}
                  </Col>
                  {allEvents
                    .filter((allEvents2, i) =>
                      viewMore === false ? i < 4 : i < 8
                    )
                    .map((singleEvent) => {
                      return (
                        <Col
                          className="col-12 mb-1 text-white"
                          key={singleEvent.id}
                        >
                          {user.user[0].city === singleEvent.hosted_by.city ? (
                            parseInt(
                              newDate - new Date(singleEvent.date_event)
                            ) > 0 ? null : (
                              <Collapse in={viewMore}>
                                <ModalEvent
                                  singleEvent={singleEvent}
                                  eventsPage={true}
                                />
                              </Collapse>
                            )
                          ) : null}
                        </Col>
                      );
                    })}
                  <div
                    className="text-end pe-4 pointer viewMore text-yellow"
                    onClick={() => {
                      setViewMore2(!viewMore2);
                    }}
                  >
                    {viewMore2 === true ? <DashCircle /> : <PlusCircleFill />}
                  </div>
                </Row>
              )}
            </Container>
          </Container>
        )}
      </div>
    )
  );
};
export default EventsPage;
