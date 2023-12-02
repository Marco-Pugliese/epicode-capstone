import { Col, Container, Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddAnEvent from "./AddAnEvent";
import InProgramm from "./InProgramm";
import { useEffect, useState } from "react";
import DoneEvents from "./DoneEvents";
import DaConfermare from "./DaConfermare";
import { getCandidatureAction } from "../Redux/Actions";

const ActivityPage = () => {
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.LoggedIn.user[0]);
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
    dispatch(getCandidatureAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCandidature.length]);
  // console.log(ArtistWithIdParam, userLogged.email);
  return (
    <Container id="activityPage" fluid className="h-100 py-1 text-yellow">
      <Row className="justify-content-center  ">
        <Col className="col-7  bg-bluedark">
          <Row className="gx-5">
            <Col className="">
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
                {activity !== undefined && activity.name_activity}
                <div className="fw-normal px-3"> | </div>
                <div className="fs-6 my-auto">
                  ({activity !== undefined && activity.kind_of_activity})
                </div>
              </div>
              <div className="position-relative translate-middle-y fs-3">
                Descrizione (da aggiungere in JSON)
              </div>

              <div className="d-flex pt-4 pb-2">
                <div className="d-flex flex-column justify-content-between w-50 ">
                  <div className="py-1">
                    <h3 className="m-0 p-0 text-white">
                      Eventi in Programma
                      <img
                        src="/assets/images/details&logo/freccia-giu-bianca.png"
                        alt="arrow down"
                        style={{ width: "15px" }}
                        className="ms-4"
                      />
                    </h3>

                    <div className="smaller pe-4">
                      <InProgramm />
                    </div>
                  </div>
                  <div className="py-1">
                    <h3 className="m-0 p-0 text-white">
                      Attività Recenti
                      <img
                        src="/assets/images/details&logo/freccia-giu-bianca.png"
                        alt="arrow down"
                        style={{ width: "15px" }}
                        className="ms-4"
                      />
                    </h3>
                    <div className="smaller pe-4">
                      <DoneEvents />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-between">
                  <div className="py-1">
                    <h3 className="m-0 p-0 text-white">
                      Eventi in attesa di conferma
                      <img
                        src="/assets/images/details&logo/freccia-giu-bianca.png"
                        alt="arrow down"
                        style={{ width: "15px" }}
                        className="ms-4"
                      />
                    </h3>
                    <div className="d-flex flex-column justify-content-between">
                      <DaConfermare />
                    </div>
                  </div>
                  <div className="py-1 text-center border-top">
                    <AddAnEvent activity={activity} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default ActivityPage;
