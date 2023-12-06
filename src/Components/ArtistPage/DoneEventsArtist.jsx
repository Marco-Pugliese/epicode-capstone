import { useParams } from "react-router-dom";

const DoneEventsArtist = ({ artist, events }) => {
  const newDate = new Date();
  const { id } = useParams();
  return (
    <div>
      {events &&
        events.map(
          (singleEvent) =>
            parseInt(singleEvent.band.id) === parseInt(id) && (
              <div>
                <span>
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
                </span>
              </div>
            )
        )}
    </div>
  );
};
export default DoneEventsArtist;
