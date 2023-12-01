import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleEvent from "./SingleEvent";
import { Container, Row } from "react-bootstrap";

const InProgramm = () => {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.MyFetches.events);
  return (
    <Container>
      <Row className="d-flex flex-column">
        {allEvents.length > 0 && allEvents !== undefined ? (
          <>
            {allEvents.map((singleEvent, i) =>
              singleEvent.hosted_by.id === id &&
              singleEvent.isConfirmed === true ? (
                <>
                  {parseInt(
                    singleEvent.date_event.slice(0, 4) *
                      100 *
                      singleEvent.date_event.slice(5, 7) *
                      10 *
                      singleEvent.date_event.slice(8, 10) *
                      1
                  ) -
                    parseInt(
                      new Date().getFullYear() *
                        100 *
                        (new Date().getMonth() + 1) *
                        10 *
                        new Date().getDate() *
                        1
                    ) >
                  0 ? (
                    <SingleEvent key={singleEvent.id} event={singleEvent} />
                  ) : null}
                </>
              ) : null
            )}
          </>
        ) : null}
      </Row>
    </Container>
  );
};

export default InProgramm;
