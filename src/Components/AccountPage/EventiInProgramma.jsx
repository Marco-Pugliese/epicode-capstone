import { useSelector } from "react-redux";
import SingleEventHome from "./SingleEventHome";

const EventiInProgramma = () => {
  //   const user = useSelector((state) => state.LoggedIn.user[0]);
  const events = useSelector((state) => state.MyFetches.events);

  return (
    <div className="text-white fw-bold fs-2">
      Tutti gli attuali eventi aperti alle candidature:
      {events.map((singleEvent, i) =>
        singleEvent.isConfirmed === false ? (
          <SingleEventHome key={i} event={singleEvent} />
        ) : null
      )}
    </div>
  );
};
export default EventiInProgramma;
