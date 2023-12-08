import { useParams } from "react-router-dom";

const InProgrammArtist = ({ artist, events }) => {
  const newDate = new Date();
  const { id } = useParams();
  return (
    <div>
      {console.log(events)}
      {events && events.length > 0
        ? events.map((singleEvent) =>
            singleEvent.band &&
            parseInt(singleEvent.band.id) === parseInt(id) ? (
              <div>
                <span>
                  {parseInt(newDate - new Date(singleEvent.date_event)) < 0 ? (
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
            ) : null
          )
        : null}
    </div>
  );
};
export default InProgrammArtist;
