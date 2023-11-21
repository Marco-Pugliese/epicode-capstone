import { Carousel, Col, Row } from "react-bootstrap";
import SingleCard from "./SingleCard";
import { useSelector } from "react-redux";

const CarouselForLG = () => {
  const articles = useSelector((state) => state.articles);

  return (
    <Carousel className="d-none d-xl-block myCarousel">
      <Carousel.Item>
        <Row>
          {articles.articles
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
      <Carousel.Item>
        <Row>
          {articles.articles
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
      <Carousel.Item>
        <Row>
          {articles.articles
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
