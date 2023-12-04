import CarouselForLG from "../LandingPage/AsideSection/CarouselForLG.jsx";
import CarouselForSm from "../LandingPage/AsideSection/CarouselForSm.jsx";
import CarouselMobile from "../LandingPage/AsideSection/CarouselMobile.jsx";
import { Container } from "react-bootstrap";
const TuttiGliArticoli = ({ articles }) => {
  return (
    <Container className="py-3 mt-4">
      <h3 className="text-center text-yellow fw-bold ">
        TUTTI I NOSTRI ARTICOLI:
      </h3>
      <CarouselForLG articles={articles} />
      <CarouselForSm articles={articles} />
      <CarouselMobile articles={articles} />
    </Container>
  );
};
export default TuttiGliArticoli;
