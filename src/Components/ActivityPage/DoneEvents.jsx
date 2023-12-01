import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleEvent from "./SingleEvent";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";

const DoneEvents = () => {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.MyFetches.events);
  useEffect(() => {
    // console.log(allEvents, id);
  }, []);
  const newDate = new Date();
  return (
    <Container>
      <Row className="d-flex flex-column">
        {allEvents.length > 0 && allEvents !== undefined ? (
          <>
            {allEvents.map((singleEvent, i) =>
              singleEvent.hosted_by.id === id &&
              singleEvent.isConfirmed === true ? (
                <>
                  {/* {parseInt(
                    2 *
                      (singleEvent.date_event.slice(0, 4) *
                        100 *
                        singleEvent.date_event.slice(5, 7) *
                        10 *
                        singleEvent.date_event.slice(8, 10) *
                        1) -
                      2 *
                        (new Date().getFullYear() *
                          100 *
                          (new Date().getMonth() + 1) *
                          10 *
                          new Date().getDate() *
                          1)
                  ) < 0 ? (
                    <SingleEvent key={singleEvent.id} event={singleEvent} />
                  ) : null} */}
                  {singleEvent.date_event}
                </>
              ) : null
            )}
          </>
        ) : null}
      </Row>
    </Container>
  );
};

export default DoneEvents;
