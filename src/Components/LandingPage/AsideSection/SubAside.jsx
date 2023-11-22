import { Container } from "react-bootstrap";
import CarouselForLG from "./CarouselForLG";
import CarouselForSM from "./CarouselForSm";
import CarouselMobile from "./CarouselMobile";
import { useSelector } from "react-redux";

const SubAside = () => {
  const articles = useSelector((state) => state.MyFetches);
  return (
    <Container
      id="subAsideSection"
      className="d-flex flex-column align-items-center justify-content-center py-4"
    >
      <div className="mt-5 mb-2 fw-bold fs-2">I NOSTRI ULTIMI ARTICOLI</div>
      <Container fluid>
        {articles.articles.length > 0 ? (
          <>
            <CarouselForLG articles={articles.articles} />
            <CarouselForSM articles={articles.articles} />
            <CarouselMobile articles={articles.articles} />
          </>
        ) : null}
      </Container>
    </Container>
  );
};
export default SubAside;
