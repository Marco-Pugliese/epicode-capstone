import { Container } from "react-bootstrap";
import CarouselForLG from "./CarouselForLG";
import CarouselForSM from "./CarouselForSm";
import CarouselMobile from "./CarouselMobile";
import { useSelector } from "react-redux";

const SubAside = () => {
  const articles = useSelector((state) => state.MyFetches);
  return (
    <Container fluid id="subAsideSection" className="text-white px-5 ">
      <div className="display-5 fw-bold px-5 py-1 text-white">
        POTREBBE INTERESSARTI
      </div>
      <div className="fs-1 px-5 text-yellow  ">
        IL NOSTRO BL
        <span>
          <img
            src="/assets/images/details&logo/obianca.png"
            alt="O"
            className="text-pop-up-top"
            style={{ width: "35px" }}
          />
        </span>
        G:
      </div>
      <Container>
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
