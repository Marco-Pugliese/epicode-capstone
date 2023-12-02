import { useDispatch, useSelector } from "react-redux";
import SingleEvent from "./SingleEvent";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { getEventsAction } from "../Redux/Actions";

const DaConfermare = () => {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.MyFetches.events);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allEvents.length]);
  return (
    <Container>
      <Row className="d-flex flex-column">
        {allEvents !== undefined && allEvents.length > 0 ? (
          <>
            {allEvents.map((singleEvent) =>
              parseInt(singleEvent.hosted_by.id) === parseInt(id) &&
              singleEvent.isConfirmed === false ? (
                <SingleEvent key={singleEvent.id} event={singleEvent} />
              ) : null
            )}
          </>
        ) : null}
      </Row>
    </Container>
  );
};

export default DaConfermare;
