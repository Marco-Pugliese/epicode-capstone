import { Carousel, CarouselItem, Container } from "react-bootstrap";
import SingleCard from "./SingleCard";

const CarouselMobile = ({ articles }) => {
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
