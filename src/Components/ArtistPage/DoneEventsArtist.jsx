import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ModalEvent from "../EventsPage/ModalEvent";
import { useSelector } from "react-redux";

const DoneEventsArtist = ({ artist, events }) => {
  const newDate = new Date();
  const { id } = useParams();
  return (
    <Container>
      {events.length > 0 &&
        events.map((singleEvent) =>
          singleEvent.band && parseInt(singleEvent.band.id) === parseInt(id) ? (
            <div>
              <>
                {parseInt(newDate - new Date(singleEvent.date_event)) > 0 ? (
                  <ModalEvent singleEvent={singleEvent} />
                ) : null}
              </>
            </div>
          ) : null
        )}
    </Container>
  );
};
export default DoneEventsArtist;
