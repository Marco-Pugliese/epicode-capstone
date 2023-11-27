import { Col } from "react-bootstrap";

const SingleEvent = ({ event }) => {
  return (
    <Col>
      {event !== undefined && (
        <>
          <div className="fw-bold">{event.name_event}</div>
          <div>{event.date_event}</div>
        </>
      )}
    </Col>
  );
};
export default SingleEvent;
