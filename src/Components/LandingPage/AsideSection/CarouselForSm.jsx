import { Carousel, CarouselItem } from "react-bootstrap";
import SingleCard from "./SingleCard";
import { useSelector } from "react-redux";

const CarouselForSM = () => {
  const articles = useSelector((state) => state.MyFetches.articles);

  return (
    articles !== undefined && (
      <div className="d-flex myCarousel">
        <Carousel className="d-none d-md-block d-xl-none w-50">
          {articles
            .filter((allArticles, i) => i < 10)
            .map((singleArticle) => {
              return (
                <CarouselItem className="py-4 px-2" key={singleArticle.id}>
                  <SingleCard article={singleArticle} />
                </CarouselItem>
              );
            })}
        </Carousel>
        <Carousel className="d-none d-md-block d-xl-none w-50">
          {articles
            .filter((allArticles, i) => i > 9 && i < 20)
            .map((singleArticle) => {
              return (
                <CarouselItem className="py-4 px-2" key={singleArticle.id}>
                  <SingleCard article={singleArticle} />
                </CarouselItem>
              );
            })}
        </Carousel>
      </div>
    )
  );
};
export default CarouselForSM;
