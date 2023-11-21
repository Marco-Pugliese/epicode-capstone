import { Container } from "react-bootstrap";
import CarouselForLG from "./CarouselForLG";
import CarouselForSM from "./CarouselForSm";
import CarouselMobile from "./CarouselMobile";

const SubAside = () => {
  return (
    <Container
      id="subAside"
      className="d-flex flex-column align-items-center justify-content-center py-4"
    >
      <div className="mt-5 mb-2 fw-bold fs-2">I NOSTRI ULTIMI ARTICOLI</div>
      <Container fluid>
        <CarouselForLG />
        <CarouselForSM />
        <CarouselMobile />
      </Container>
    </Container>
  );
};
export default SubAside;
