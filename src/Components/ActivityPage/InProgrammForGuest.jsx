import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Container, Row } from "react-bootstrap";
import ModalEvent from "../EventsPage/ModalEvent";

const InProgrammForGuest = () => {
  const newDate = new Date();
  const { id } = useParams();
  const allEvents = useSelector((state) => state.MyFetches.events);
  return (
    <Container>
      <Row className="d-flex flex-column">
        {allEvents.length > 0 && allEvents !== undefined ? (
          <>
            {allEvents.map((singleEvent) =>
              parseInt(singleEvent.hosted_by.id) === parseInt(id) &&
              singleEvent.isConfirmed === true ? (
                <div key={singleEvent.id}>
                  {parseInt(newDate - new Date(singleEvent.date_event)) < 0 ? (
                    <ModalEvent singleEvent={singleEvent} />
                  ) : null}
                </div>
              ) : null
            )}
          </>
        ) : null}
      </Row>
    </Container>
  );
};

export default InProgrammForGuest;
