import { Carousel, Col, Row } from "react-bootstrap";
import SingleCard from "./SingleCard";

const CarouselForLG = ({ articles }) => {
  return articles === undefined ? (
    ""
  ) : (
    <Carousel className="d-none d-xl-block myCarousel">
      <Carousel.Item className="py-4 px-5">
        <Row>
          {articles
            .filter((allArticles, i) => i < 5)
            .map((singleArticle) => {
              return (
                <Col key={singleArticle.id}>
                  <SingleCard article={singleArticle} />
                </Col>
              );
            })}
        </Row>
      </Carousel.Item>
      <Carousel.Item className="py-4 px-5">
        <Row>
          {articles
            .filter((allArticles, i) => i > 4 && i < 10)
            .map((singleArticle) => {
              return (
                <Col key={singleArticle.id}>
                  <SingleCard article={singleArticle} />
                </Col>
              );
            })}
        </Row>
      </Carousel.Item>
      <Carousel.Item className="py-4 px-5">
        <Row>
          {articles
            .filter((allArticles, i) => i > 9 && i < 15)
            .map((singleArticle) => {
              return (
                <Col key={singleArticle.id}>
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
