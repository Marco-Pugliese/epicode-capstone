import { Carousel, CarouselItem, Col, Row } from "react-bootstrap";
import SingleCard from "./SingleCard";

const CarouselForSM = ({ articles }) => {
  return (
    articles !== undefined && (
      <div className="d-flex myCarousel">
        <Carousel className="d-none d-md-block d-xl-none px-5">
          <CarouselItem className="px-4 ">
            <Row>
              {articles
                .filter((allArticles, i) => i < 2)
                .map((singleArticle) => {
                  return (
                    <Col key={singleArticle.id} className="d-flex">
                      <SingleCard article={singleArticle} />
                    </Col>
                  );
                })}
            </Row>
          </CarouselItem>
          <CarouselItem className="px-4 ">
            <Row>
              {articles
                .filter((allArticles, i) => i > 2 && i < 5)
                .map((singleArticle) => {
                  return (
                    <Col key={singleArticle.id} className="d-flex">
                      <SingleCard article={singleArticle} />
                    </Col>
                  );
                })}
            </Row>
          </CarouselItem>
          <CarouselItem className="px-4 ">
            <Row>
              {articles
                .filter((allArticles, i) => i > 5 && i < 8)
                .map((singleArticle) => {
                  return (
                    <Col key={singleArticle.id} className="d-flex">
                      <SingleCard article={singleArticle} />
                    </Col>
                  );
                })}
            </Row>
          </CarouselItem>
          <CarouselItem className="px-4 ">
            <Row>
              {articles
                .filter((allArticles, i) => i > 8 && i < 11)
                .map((singleArticle) => {
                  return (
                    <Col key={singleArticle.id} className="d-flex">
                      <SingleCard article={singleArticle} />
                    </Col>
                  );
                })}
            </Row>
          </CarouselItem>
          <CarouselItem className="px-4 ">
            <Row>
              {articles
                .filter((allArticles, i) => i > 11 && i < 14)
                .map((singleArticle) => {
                  return (
                    <Col key={singleArticle.id} className="d-flex">
                      <SingleCard article={singleArticle} />
                    </Col>
                  );
                })}
            </Row>
          </CarouselItem>
          <CarouselItem className="px-4 ">
            <Row>
              {articles
                .filter((allArticles, i) => i > 14 && i < 17)
                .map((singleArticle) => {
                  return (
                    <Col key={singleArticle.id} className="d-flex">
                      <SingleCard article={singleArticle} />
                    </Col>
                  );
                })}
            </Row>
          </CarouselItem>
        </Carousel>
      </div>
    )
  );
};
export default CarouselForSM;
