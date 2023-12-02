import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleEvent from "./SingleEvent";
import { Container, Row } from "react-bootstrap";

const InProgramm = () => {
  const newDate = new Date();
  const { id } = useParams();
  const allEvents = useSelector((state) => state.MyFetches.events);
  return (
    <Container>
      <Row className="d-flex flex-column">
        {allEvents.length > 0 && allEvents !== undefined ? (
          <>
            {allEvents.map((singleEvent) =>
              singleEvent.hosted_by.id === id &&
              singleEvent.isConfirmed === true ? (
                <>
                  {parseInt(newDate - new Date(singleEvent.date_event)) < 0 ? (
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
