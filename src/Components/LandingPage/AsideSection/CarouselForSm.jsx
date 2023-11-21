import { Carousel, CarouselItem } from "react-bootstrap";
import SingleCard from "./SingleCard";
import { useSelector } from "react-redux";

const CarouselForSM = () => {
  const articles = useSelector((state) => state.articles);

  return (
    <div className="d-flex myCarousel">
      <Carousel className="d-none d-md-block d-xl-none w-50">
        {articles.articles
          .filter((allArticles, i) => i < 10)
          .map((singleArticle) => {
            return (
              <CarouselItem key={singleArticle.id}>
                <SingleCard article={singleArticle} />
              </CarouselItem>
            );
          })}
      </Carousel>
      <Carousel className="d-none d-md-block d-xl-none w-50">
        {articles.articles
          .filter((allArticles, i) => i > 9 && i < 20)
          .map((singleArticle) => {
            return (
              <CarouselItem key={singleArticle.id}>
                <SingleCard article={singleArticle} />
              </CarouselItem>
            );
          })}
      </Carousel>
    </div>
  );
};
export default CarouselForSM;
