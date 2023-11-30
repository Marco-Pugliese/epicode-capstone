import { useSelector } from "react-redux";
import SingleEvent from "./SingleEvent";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

const DaConfermare = () => {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.MyFetches.events);
  return (
    <Container>
      <Row className="d-flex flex-column">
        {allEvents.length > 0 && allEvents !== undefined ? (
          <>
            {allEvents.map((singleEvent) =>
              singleEvent.hosted_by.id === id &&
              singleEvent.isConfirmed === false ? (
                <>
                  {parseInt(
                    singleEvent.date_event.slice(0, 4) *
                      20 *
                      (singleEvent.date_event.slice(5, 7) - 1) *
                      15 *
                      singleEvent.date_event.slice(8, 10) *
                      1
                  ) -
                    parseInt(
                      new Date().getFullYear() *
                        20 *
                        new Date().getMonth() *
                        15 *
                        new Date().getDate() *
                        1
                    ) >
                  0 ? (
                    <SingleEvent event={singleEvent} />
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

export default DaConfermare;
