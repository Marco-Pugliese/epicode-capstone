import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCandidatureAction } from "../Redux/Actions";
import { EnvelopeFill, PinMapFill, TelephoneFill } from "react-bootstrap-icons";
import InProgrammForGuest from "./InProgrammForGuest";
import DoneEventsForGuest from "./DoneEventsForGuest";

const ActivityForGuest = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allCandidature = useSelector((state) => state.MyFetches.candidature);
  const allActivity = useSelector((state) => state.MyFetches.activities);
  const [activity, setActivity] = useState();
  const myActivity = () => {
    if (allActivity !== undefined && allActivity.length > 0) {
      allActivity.map((singleActivity) =>
        parseInt(singleActivity.id) === parseInt(id)
          ? setActivity(singleActivity)
          : null
      );
    }
  };
  useEffect(() => {
    myActivity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(getCandidatureAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCandidature.length]);
  return (
    <Container id="activityPage" fluid className="h-100 text-white">
      <Row className="justify-content-center h-100">
        <Col className="col-7 rounded-2">
          <Row>
            <Col>
              <div className="w-100">
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
              {activity && (
                <Row className=" text-yellow fw-bold  d-flex justify-content-between">
                  <Col className="col-9 d-flex flex-column">
                    <span className="display-6 fw-bold">
                      {activity.name_activity}
                    </span>
                    <span className="fw-normal smaller text-white fst-italic">
                      {activity.description}
                    </span>
                  </Col>

                  <Col className="fs-6 my-auto fw-normal ">
                    <div className="d-flex ">
                      <PinMapFill className="text-yellow small" />
                      <div className="d-flex flex-column ms-2 smaller text-white">
                        <span>
                          {activity.city} <span>({activity.region})</span>
                        </span>
                        <span>
                          {activity.strada}, {activity.civico}
                        </span>
                      </div>
                    </div>
                    <div>
                      <EnvelopeFill className="text-yellow small" />
                      <span className="smaller ms-2 text-white">
                        {activity.email}
                      </span>
                    </div>
                    <div>
                      <TelephoneFill className="text-yellow small" />
                      <span className="smaller ms-2 text-white">
                        {activity.phone}
                      </span>
                    </div>
                  </Col>
                </Row>
              )}

              <Row className="pt-4 pb-2">
                <Col className="col-12 col-xxl-6">
                  <h3 className="m-0 p-0 text-yellow">Eventi in Programma</h3>
                  <div className="smaller">
                    <InProgrammForGuest />
                  </div>
                </Col>

                <Col className="col-12 col-xxl-6">
                  <h3 className="m-0 p-0 text-yellow">Attività Recenti</h3>
                  <div className="smaller">
                    <DoneEventsForGuest />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default ActivityForGuest;
