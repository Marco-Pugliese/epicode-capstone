import { Carousel, CarouselItem, Container } from "react-bootstrap";
import SingleCard from "./SingleCard";
import { useSelector } from "react-redux";

const CarouselMobile = () => {
  const articles = useSelector((state) => state.MyFetches.articles);

  return (
    articles !== undefined && (
      <Container className="myCarousel">
        <Carousel className="d-block d-md-none">
          {articles.map((singleArticle) => {
            return (
              <CarouselItem className="py-4 px-2" key={singleArticle.id}>
                <SingleCard article={singleArticle} />
              </CarouselItem>
            );
          })}
        </Carousel>
      </Container>
    )
  );
};
export default CarouselMobile;
