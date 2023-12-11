import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ModalEvent from "../EventsPage/ModalEvent";

const InProgrammArtist = ({ artist, events }) => {
  const newDate = new Date();
  const { id } = useParams();
  return (
    <Container>
      {console.log(events)}
      {events && events.length > 0
        ? events.map((singleEvent) =>
            singleEvent.band &&
            parseInt(singleEvent.band.id) === parseInt(id) ? (
              <>
                <span>
                  {parseInt(newDate - new Date(singleEvent.date_event)) < 0 ? (
                    <ModalEvent singleEvent={singleEvent} />
                  ) : null}
                </span>
              </>
            ) : null
          )
        : null}
    </Container>
  );
};
export default InProgrammArtist;
