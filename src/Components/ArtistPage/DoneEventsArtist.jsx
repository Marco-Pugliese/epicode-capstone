import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DoneEventsArtist = ({ artist, events }) => {
  const newDate = new Date();
  const { id } = useParams();
  return (
    <Container>
      {events &&
        events.map((singleEvent) =>
          singleEvent.band && parseInt(singleEvent.band.id) === parseInt(id) ? (
            <div>
              <>
                {parseInt(newDate - new Date(singleEvent.date_event)) > 0 ? (
                  <div className="fw-bold">
                    {singleEvent.name_event} -{" "}
                    <span className="extrasmall fw-normal">
                      {singleEvent.date_event.slice(8, 10)}/
                      {singleEvent.date_event.slice(5, 7)}/
                      {singleEvent.date_event.slice(0, 4)}
                    </span>
                  </div>
                ) : null}
              </>
            </div>
          ) : null
        )}
    </Container>
  );
};
export default DoneEventsArtist;
