import { useSelector } from "react-redux";
import CarouselForLG from "../LandingPage/AsideSection/CarouselForLG.jsx";
import CarouselForSm from "../LandingPage/AsideSection/CarouselForSm.jsx";
import CarouselMobile from "../LandingPage/AsideSection/CarouselMobile.jsx";
import { Container } from "react-bootstrap";
const TuttiGliArticoli = () => {
  const articles = useSelector((state) => state.MyFetches.articles);
  return (
    <Container className="py-3 mt-4">
      <h3 className="text-center text-yellow fw-bold ">
        TUTTI I NOSTRI ARTICOLI:
      </h3>
      <CarouselForLG articles={articles.articles} />
      <CarouselForSm articles={articles.articles} />
      <CarouselMobile articles={articles.articles} />
    </Container>
  );
};
export default TuttiGliArticoli;
