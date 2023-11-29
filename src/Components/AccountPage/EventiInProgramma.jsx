import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleEventHome from "./SingleEventHome";

const EventiInProgramma = () => {
  //   const user = useSelector((state) => state.LoggedIn.user[0]);
  const events = useSelector((state) => state.MyFetches.events);

  return (
    <Container className="text-white fs-2">
      Tutti gli eventi disponibili al momento:
      {events.map((singleEvent, i) => (
        <SingleEventHome key={i} event={singleEvent} />
      ))}
    </Container>
  );
};
export default EventiInProgramma;
