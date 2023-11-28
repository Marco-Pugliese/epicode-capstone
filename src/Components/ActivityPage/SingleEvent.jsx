import { Col } from "react-bootstrap";

const SingleEvent = ({ event }) => {
  return (
    <>
      {event !== undefined && event.isConfirmed ? (
        <>
          <Col>
            <div className="fw-bold">{event.name_event}</div>
            <div>{event.date_event}</div>
          </Col>
        </>
      ) : null}
    </>
  );
};
export default SingleEvent;
