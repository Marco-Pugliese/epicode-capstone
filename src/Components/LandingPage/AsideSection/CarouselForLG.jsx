import { Carousel, Col, Row } from "react-bootstrap";
import SingleCard from "./SingleCard";

const CarouselForLG = ({ articles }) => {
  return articles === undefined ? (
    ""
  ) : (
    <Carousel className="d-none d-xl-block myCarousel">
      <Carousel.Item className="py-4 px-5 h-100">
        <Row className="mx-5 h-100">
          {articles
            .filter((allArticles, i) => i < 4)
            .map((singleArticle) => {
              return (
                <Col key={singleArticle.id} className="d-flex">
                  <SingleCard article={singleArticle} />
                </Col>
              );
            })}
        </Row>
      </Carousel.Item>
      <Carousel.Item className="py-4 px-5 h-100">
        <Row className="mx-5 h-100">
          {articles
            .filter((allArticles, i) => i > 5 && i < 10)
            .map((singleArticle) => {
              return (
                <Col key={singleArticle.id} className="d-flex">
                  <SingleCard article={singleArticle} />
                </Col>
              );
            })}
        </Row>
      </Carousel.Item>
      <Carousel.Item className="py-4 px-5 h-100">
        <Row className="mx-5 h-100">
          {articles
            .filter((allArticles, i) => i > 11 && i < 16)
            .map((singleArticle) => {
              return (
                <Col key={singleArticle.id} className="d-flex">
                  <SingleCard article={singleArticle} />
                </Col>
              );
            })}
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselForLG;
